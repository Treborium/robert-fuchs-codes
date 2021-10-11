import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from 'react-feather';

import { theme } from '../components/Theme';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={styles.hamburger}
      >
        <MenuIcon color={theme.fontColor} strokeWidth='3px' />
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
        {/* TODO: Navigate to respective page */}
        <MenuItem onClick={handleClose} href='/home'>
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} href='/experience'>
          Experience
        </MenuItem>
        <MenuItem onClick={handleClose} href='/projects'>
          Projects
        </MenuItem>
      </Menu>
    </div>
  );
}

const styles = {
  hamburger: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1000,
  },
} as const;
