import { useState } from 'react';

import { AddIcon, CheckIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';

import { getAllCompanies } from '../../services/companyService';
import { Action, ActionType, State } from '../../store/AddLeadStore';

const LeadFormCompanySection = ({
  state,
  dispatch,
}: LeadFormCompanySectionProps): JSX.Element => {
  const { data: companies } = getAllCompanies();

  const selectedCompanyId = state.data.companyId;
  const selectCompany = (id: string) =>
    // Select the company or unselect if selected
    dispatch({
      type: ActionType.ChangeCompany,
      payload: selectedCompanyId === id ? '' : id,
    });

  const [search, setSearch] = useState('');

  return (
    <>
      <Heading pb={4} pt={8}>
        Entreprise
      </Heading>
      <Stack>
        <FormControl>
          <InputGroup>
            <InputLeftElement>
              <Search2Icon color="whiteAlpha.400" />
            </InputLeftElement>
            <Input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher"
              background="gray.900"
              boxShadow="inner"
              border="none"
            />
          </InputGroup>
        </FormControl>
        <Box h={4} />
        {!!companies &&
          companies
            .filter((company) =>
              company.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((company) => (
              <Button
                boxShadow="sm"
                key={company.id}
                onClick={() => {
                  selectCompany(company.id.toString());
                }}
                variant="outline"
                _active={{
                  bg: 'orange.600',
                }}
                order={selectedCompanyId === company.id.toString() ? 0 : 1}
                isActive={selectedCompanyId === company.id.toString()}
                leftIcon={
                  selectedCompanyId === company.id.toString() ? (
                    <CheckIcon />
                  ) : undefined
                }
              >
                {company.name}
              </Button>
            ))}
        <Button
          variant="outline"
          color="whiteAlpha.400"
          _hover={{ color: 'whiteAlpha.900', borderColor: 'orange.600' }}
          leftIcon={<AddIcon />}
          order={2}
        >
          Ajouter une nouvelle entreprise
        </Button>
      </Stack>
    </>
  );
};

export default LeadFormCompanySection;

type LeadFormCompanySectionProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
