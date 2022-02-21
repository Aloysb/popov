import { AddIcon, CheckIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Stack,
  Box,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import { useState } from 'react';

const AddLeadCompanyTab = (): JSX.Element => {
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
      key: 5,
      name: 'World',
    },
    {
      key: 4,
      name: 'Surf',
    },
    {
      key: 3,
      name: 'Pacman',
    },
    {
      key: 2,
      name: 'Popov',
    },
  ];

  return (
    <Stack>
      <FormControl>
        <InputGroup>
          <InputLeftElement>
            <Search2Icon />
          </InputLeftElement>
          <Input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
          />
        </InputGroup>
      </FormControl>
      <Box h={4} />
      {companies
        .filter((company) =>
          company.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((company, idx) => (
          <Button
            key={company.key}
            onClick={() => {
              setSelectedCompany(idx);
            }}
            variant="outline"
            isActive={selectedCompany === idx}
            leftIcon={selectedCompany === idx ? <CheckIcon /> : undefined}
          >
            {company.name}
          </Button>
        ))}
      <Button variant="outline" leftIcon={<AddIcon />}>
        Add a new company
      </Button>
    </Stack>
  );
};

export default AddLeadCompanyTab;
