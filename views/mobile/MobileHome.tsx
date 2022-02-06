import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import HamburgerMenu from '../../components/HamburgerMenu';
import SocialMediaButtonGroup from '../../components/SocialMediaButtonGroup';

export default function MobileHome() {
  return (
    <>
      <HamburgerMenu />
      <Box sx={styles.container}>
        <Box sx={styles.topHalf}>
          <Image
            src='/title-picture.png'
            alt='picture of Robert Fuchs'
            layout='fill'
            objectFit='cover'
            sizes='100vw'
            priority
          />
          <Box sx={styles.gradiant} zIndex={999} />
        </Box>
        <Box sx={styles.bottomHalf}>
          <Typography variant='h1' fontSize='2rem' sx={styles.heading}>
            Robert Fuchs
          </Typography>

          <Typography variant='h2' fontSize='1.5rem' align='center'>
            Professional Software Developer, Sports Enthusiast and Optimist
          </Typography>

          <SocialMediaButtonGroup iconSize='40px'/>
        </Box>
      </Box>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  gradiant: {
    background: 'linear-gradient(0deg, #EFEFEF 0%, rgba(239, 239, 239, 0) 50%)',
    mixBlendMode: 'normal',
    width: '100vw',
    height: '50%',
    position: 'fixed',
  },
  topHalf: {
    height: '50%',
    width: '100vw',
    position: 'relative',
  },
  bottomHalf: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '50%',
    width: '100vw',
    paddingX: '5vw',
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    fontWeight: 'bold',
  },
} as const;
