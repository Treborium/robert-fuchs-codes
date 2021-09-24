import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';

import Navigation from '../../components/Navigation';
import { GitHub, Linkedin, Mail } from 'react-feather';
import { theme } from '../../components/Theme';

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters sx={styles.container}>
      <Navigation />
      <Box sx={styles.leftHalf}>
        <Typography variant='h1' sx={styles.heading} fontSize='48px'>
          Robert Fuchs
        </Typography>
        <Typography variant='h2' fontSize='36px'>
          Professional Software Developer, Sports Enthusiast and Optimist
        </Typography>
        <Box sx={styles.icons}>
          <IconButton>
            <Linkedin strokeWidth='1px' color={theme.fontColor} size='80px'/>
          </IconButton>
          <IconButton>
            <GitHub strokeWidth='1px' color={theme.fontColor} size='80px'/>
          </IconButton>
          <IconButton>
            <Mail strokeWidth='1px' color={theme.fontColor} size='80px'/>
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.rightHalf}></Box>
    </Container>
  );
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: theme.backgroundColor,
  },
  leftHalf: {
    height: '100vh',
    width: '50%',
    paddingX: '45px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rightHalf: {
    height: '100vh',
    width: '50%',
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    fontWeight: 'bold',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  subheading: {
  },
} as const;
