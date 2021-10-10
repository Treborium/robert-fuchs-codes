import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import Navigation from '../../components/Navigation';
import SocialMediaButtonGroup from '../../components/SocialMediaButtonGroup';
import Page from '../../components/Page';

export default function Home() {
  return (
    <Page>
      <Navigation />
      <Box sx={styles.leftHalf}>
        <Typography variant='h1' sx={styles.heading} fontSize='3rem'>
          Robert Fuchs
        </Typography>
        <Typography variant='h2' fontSize='2rem'>
          Professional Software Developer, Sports Enthusiast and Optimist
        </Typography>
        <SocialMediaButtonGroup />
      </Box>
      <Box sx={styles.rightHalf}>
        <Box sx={styles.gradiant} zIndex={1000} />
        <Image
          src='/title-picture.png'
          alt='picture of Robert Fuchs'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          sizes='50vw'
          priority
        />
      </Box>
    </Page>
  );
}

const styles = {
  leftHalf: {
    height: '100vh',
    width: '50%',
    paddingX: '45px',
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rightHalf: {
    height: '100vh',
    width: '50%',
    position: 'relative',
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    fontWeight: 'bold',
  },
  gradiant: {
    background:
      'linear-gradient(90deg, #EFEFEF 0%, rgba(239, 239, 239, 0) 100%)',
    mixBlendMode: 'normal',
    width: '50%',
    height: '100vh',
    position: 'absolute',
  },
} as const;
