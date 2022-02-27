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

const LeadFormCompanySection = (): JSX.Element => {
  interface Company {
    name: string;
    key: number;
  }

  const [selectedCompany, setSelectedCompany] = useState<null | number>(null);
  const [search, setSearch] = useState('');

  const companies: Company[] = [
    {
      key: 1,
      name: 'Hello',
    },
    {
      key: 2,
      name: 'World',
    },
    {
      key: 3,
      name: 'Surf',
    },
    {
      key: 4,
      name: 'Pacman',
    },
    {
      key: 5,
      name: 'Popov',
    },
  ];

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
        {companies
          .filter((company) =>
            company.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((company) => (
            <Button
              boxShadow="sm"
              key={company.key}
              onClick={() => {
                setSelectedCompany(company.key);
              }}
              variant="outline"
              _active={{
                bg: 'orange.600',
                order: 0,
              }}
              order={1}
              isActive={selectedCompany === company.key}
              leftIcon={
                selectedCompany === company.key ? <CheckIcon /> : undefined
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
