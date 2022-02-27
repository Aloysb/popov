import { Box, Text, Flex } from '@chakra-ui/react';

export interface Lead {
  name: string;
  position: string;
  company: Company;
}

interface Company {
  name: string;
  address: Address;
}

interface Address {
  town: string;
}

const LeadCard = ({ lead }: { lead: Lead }) => {
  const { name, position, company } = lead;
  return (
    <Box bg="gray.200" borderRadius={8} color="blue.800" p={4}>
      <Flex>
        <Flex flexDir="column" flex="1">
          <Text>{name}</Text>
          <Text>{position}</Text>
          <Text>{company.name}</Text>
          <Text>{company.address.town}</Text>
        </Flex>
        <Flex flexDir="column" justifyContent="flex-end">
          <Text>5km away</Text>
          <Text>10 min away</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LeadCard;
