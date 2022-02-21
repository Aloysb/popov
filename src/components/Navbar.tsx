import { AddIcon, CalendarIcon, InfoIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

import NavbarLinkMobile from './NavbarLinkMobile';

// Types
// eslint-disable-next-line no-shadow
export enum NavigationItems {
  MAP = 'map',
  LIST = 'list',
  SEARCH = 'search',
  ADD = 'add',
}

// Constants/Config
const ICON_SIZE = 6;
const MENU_ITEMS: [NavigationItems, JSX.Element][] = [
  [NavigationItems.MAP, <InfoIcon w={ICON_SIZE} h={ICON_SIZE} />],
  [NavigationItems.SEARCH, <CalendarIcon w={ICON_SIZE} h={ICON_SIZE} />],
  [NavigationItems.LIST, <SearchIcon w={ICON_SIZE} h={ICON_SIZE} />],
  [NavigationItems.ADD, <AddIcon w={ICON_SIZE} h={ICON_SIZE} />],
];

const Navbar = ({
  activeLink,
  navigateTo,
}: {
  activeLink: NavigationItems;
  navigateTo: (link: NavigationItems) => void;
}): JSX.Element => (
  <Box
    p="4"
    bg="gray.50"
    m="4"
    borderRadius="8"
    boxShadow="sm"
    position="sticky"
    bottom={4}
  >
    <Flex justify="space-around" h="full">
      {MENU_ITEMS.map(([title, icon]) => (
        <Box as="button" onClick={() => navigateTo(title)} flex="1">
          <NavbarLinkMobile
            title={title}
            icon={icon}
            isActive={activeLink === title}
          />
        </Box>
      ))}
    </Flex>
  </Box>
);

export default Navbar;
