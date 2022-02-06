import React from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import { theme } from '../../components/Theme';

export default function Home() {
  return (
    <Box sx={styles.container}>
      <Avatar alt="Robert Fuchs Avatar" src="/avatar.svg" sx={styles.avatar}/>
      <Typography variant='h1'>Robert Fuchs</Typography>
    </Box>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '40vh',
    height: '40vh',
    backgroundColor: 'white',
    marginBottom: '10vh',
  }
} as const;
