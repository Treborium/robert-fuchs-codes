import React from 'react';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
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
        <MenuIcon color={theme.fontColor} strokeWidth='2px' size='40px' />
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
        <MenuItem onClick={handleClose}>
          <UnstyledLink text='Home' href='/home' />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UnstyledLink text='Experience' href='/experience' />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UnstyledLink text='Projects' href='/projects' />
        </MenuItem>
      </Menu>
    </div>
  );
}

interface Props {
  text: string;
  href: string;
}

function UnstyledLink({ text, href }: Props): JSX.Element {
  return (
    <Link href={href} underline='none' sx={{ color: theme.fontColor }}>
      {text}
    </Link>
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
