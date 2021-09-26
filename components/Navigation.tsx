import React from 'react';
import { Box, Link, Typography } from '@mui/material';

import { theme } from './Theme';

export default function Navigation() {
  const linkProps = {
    color: theme.fontColor,
  };

  return (
    <Box sx={styles.container}>
      <Link href='/home' sx={styles.text} {...linkProps}>
        home
      </Link>
      <Typography sx={styles.divider}>|</Typography>
      <Link href='/experience' sx={styles.text} {...linkProps}>
        experience
      </Link>
      <Typography sx={styles.divider}>|</Typography>
      <Link href='/projects' sx={styles.text} {...linkProps}>
        projects
      </Link>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    position: 'fixed',
    top: '35px',
    left: '45px',
    border: 'none',
  },
  divider: {
    margin: '0px 10px',
    fontSize: '1.5rem',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    color: '#000000',
    fontSize: '1.5rem',
    
  },
} as const;
