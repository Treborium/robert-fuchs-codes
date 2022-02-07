import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';

import { theme } from './Theme';
import { Menu as MenuIcon } from 'react-feather';

export default function Navigation() {
  const [anchorEl, setAnchorEl] =  React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={styles.menu}
        size='large'
      >
        <MenuIcon size='50px' />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} href='/home' component='a'>
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} href='/experience' component='a'>
          Experience
        </MenuItem>
        <MenuItem onClick={handleClose} href='/contact' component='a'>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}

const styles = {
  menu: {
    position: 'absolute',
    right: '50px',
    top: '50px',
    color: theme.fontColor,
  },
} as const;
