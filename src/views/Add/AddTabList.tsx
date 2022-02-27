import { Box, Tab, TabList } from '@chakra-ui/react';

const AddTabList = (): JSX.Element => (
  <Box>
    <TabList>
      {Object.values(TabNames).map((tab) => (
        <Tab
          key={tab}
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

export default AddTabList;

enum TabNames {
  lead = 'contact',
  company = 'Entreprise',
}
