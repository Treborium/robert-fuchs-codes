import React from 'react';

import { Menu as MenuIcon } from 'react-feather';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';

export default function Navigation() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<MenuIcon width='2.5rem' height='2.5rem'/>}
        variant='none'
        color='white'
        position='absolute'
        right='2vh'
        top='2vh'
      />
      <MenuList>
        <MenuItem as='a' href='/home'>
         Home
        </MenuItem>
        <MenuItem as='a' href='/experience'>
          Experience
        </MenuItem>
        <MenuItem as='a' href='/contact'>
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
