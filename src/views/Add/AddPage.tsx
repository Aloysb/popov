import { Flex, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import AddCompanyForm from './AddCompanyForm';
import AddLeadForm from './AddLeadForm';
import AddTabSelector from './AddTabList';

const AddPage = (): JSX.Element => (
  <Flex flexDirection="column" alignItems="stretch" flex="1" py={4}>
    <Tabs isFitted flex="1" variant="solid-rounded">
      {/* Tab selectors */}
      <AddTabSelector />

      {/* Tabs */}
      <Flex flexDir="column" h="full">
        <TabPanels flexGrow={1}>
          <TabPanel>
            <AddLeadForm />
          </TabPanel>
          <TabPanel>
            <AddCompanyForm />
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  </Flex>
);

export default AddPage;
