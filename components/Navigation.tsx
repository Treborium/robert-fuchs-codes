import React from 'react';
import { Box, Link, Typography } from '@mui/material';

export default function Navigation() {
  return (
    <Box sx={styles.container}>
      <Link href='/home' sx={styles.text}>
        home
      </Link>
      <Typography sx={styles.marginPerItem}>|</Typography>
      <Link href='/experience' sx={styles.text}>
        experience
      </Link>
      <Typography sx={styles.marginPerItem}>|</Typography>
      <Link href='/projects' sx={styles.text}>
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
  marginPerItem: {
    margin: '0px 10px',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    color: '#000000',
    fontSize: '1.5rem',
  },
} as const;
