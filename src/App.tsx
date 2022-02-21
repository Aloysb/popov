import { Box, Flex } from '@chakra-ui/react';

import Navbar, { NavigationItems } from './components/Navbar';
import Router from './components/Router';

const App = (): JSX.Element => (
  <Flex flexDir="column" h="100vh">
    <Router />
  </Flex>
);

export default App;
