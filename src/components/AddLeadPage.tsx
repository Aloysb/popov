import { Flex, Tabs, TabPanel, TabPanels, Heading } from '@chakra-ui/react';
import AddCompanyTab from './AddCompanyTab';
import AddLeadContactTabPanel from './AddLeadContactTabPanel';
import AddLeadTabList from './AddLeadTabList';

const AddLeadPage = (): JSX.Element => (
  <Flex flexDirection="column" alignItems="stretch" flex="1" py={4}>
    <Tabs isFitted flex="1" variant="solid-rounded">
      <AddLeadTabList />
      <Flex flexDir="column" h="full">
        <TabPanels flexGrow={1}>
          <TabPanel>
            <AddLeadContactTabPanel />
          </TabPanel>
          <TabPanel>
            <AddCompanyTab />
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  </Flex>
);

export default AddLeadPage;
