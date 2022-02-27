import { Box, TabList, Tab } from '@chakra-ui/react';

const AddLeadTabList = (): JSX.Element => (
  <Box>
    <TabList>
      {Object.values(TabNames).map((tab) => (
        <Tab
          _selected={{
            bg: 'orange.600',
            color: 'whiteAlpha.900',
            dropShadow: 'sm',
          }}
          textTransform="capitalize"
          color="whiteAlpha.700"
        >
          {tab}
        </Tab>
      ))}
    </TabList>
  </Box>
);

export default AddLeadTabList;

enum TabNames {
  lead = 'contact',
  company = 'Entreprise',
}
