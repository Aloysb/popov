import { useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import Navbar, { NavigationItems } from './Navbar';
import SearchPage from './SearchPage';
import AddLeadPage from './AddLeadPage';

const Router = (): JSX.Element => {
  const DEFAULT_NAVIGATION_ITEM = NavigationItems.ADD;
  const [currentRoute, setCurrentRoute] = useState(DEFAULT_NAVIGATION_ITEM);

  const currentPage = () => {
    switch (currentRoute) {
      case NavigationItems.SEARCH:
        return <SearchPage />;
      case NavigationItems.LIST:
        return <h1>List</h1>;
      case NavigationItems.ADD:
        return <AddLeadPage />;
      case NavigationItems.MAP:
      default:
        return <h1>Map</h1>;
    }
  };

  return (
    <Flex direction="column" flex="1" maxHeight="100vh" overflowY="scroll">
      <Flex as="main" flex="1" justifyContent="center">
        {currentPage()}
      </Flex>
      <Navbar activeLink={currentRoute} navigateTo={setCurrentRoute} />
    </Flex>
  );
};

export default Router;
