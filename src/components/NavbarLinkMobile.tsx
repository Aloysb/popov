import { Flex, Text } from '@chakra-ui/react';

import { NavigationItems } from './Navbar';

const NavbarLinkMobile = ({
  title,
  icon,
  isActive,
}: {
  title: NavigationItems;
  icon: JSX.Element;
  isActive: boolean;
}): JSX.Element => (
  <Flex
    flexDir="column"
    alignItems="center"
    justifyContent="space-around"
    color="blue.800"
  >
    {icon}
    <Text
      fontSize="md"
      pt="2"
      textTransform="uppercase"
      letterSpacing="wide"
      hidden={!isActive}
    >
      {title}
    </Text>
  </Flex>
);

export default NavbarLinkMobile;
