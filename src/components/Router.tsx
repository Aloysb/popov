import { useState } from 'react';

import { Box, Container, Flex } from '@chakra-ui/react';

import AddPage from '../views/Add/AddPage';

import Navbar, { NavigationItems } from './Navbar';
import SearchPage from './SearchPage';

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
        return <AddPage />;
      case NavigationItems.MAP:
      default:
        return <h1>Map</h1>;
    }
  };

  return (
    <Flex direction="column" flex="1" maxHeight="100vh" overflowY="scroll">
      <Container flex="1">
        <Flex as="main" justifyContent="center" h="full">
          {currentPage()}
        </Flex>
      </Container>
      <Navbar activeLink={currentRoute} navigateTo={setCurrentRoute} />
    </Flex>
  );
};

export default Router;
