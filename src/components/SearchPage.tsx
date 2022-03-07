import { useState } from 'react';

import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';

import LeadCard, { Lead } from './LeadCard';
import FakeLead from '../mocks/FakeLead';

const SearchPage = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>();
  return (
    <Flex flex="1" align="center" justifyContent="center">
      <Container h="full" flex="1">
        <Flex flexDirection="column" h="full">
          <Flex
            flex={searchValue === '' ? '1' : '0'}
            justifyContent="center"
            alignItems="center"
          >
            <InputGroup
              bg="white"
              color="blue.800"
              borderRadius="8"
              flex={searchValue && '1'}
            >
              <InputLeftElement>
                {searchValue === '' ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon as="button" onClick={() => setSearchValue('')} />
                )}
              </InputLeftElement>
              <Input
                placeholder="Search"
                _placeholder={{ color: 'blue.800' }}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </InputGroup>
          </Flex>

          {/* {searchValue && ( */}
          <Box flex="1">
            <Stack spacing={4} py={4}>
              {new Array(8).fill(new FakeLead().get()).map((lead) => (
                <LeadCard lead={lead} />
              ))}
            </Stack>
          </Box>
          {/* )} */}
        </Flex>
      </Container>
    </Flex>
  );
};

export default SearchPage;
