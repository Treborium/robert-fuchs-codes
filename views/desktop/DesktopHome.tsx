import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';

import SocialMediaButtonGroup from '../../components/SocialMediaButtonGroup';
import Navigation, { NavigationPages } from '../../components/Navigation';
import { theme } from '../../components/Theme';

import TitlePicture from '../../public/title-picture.png';

export default function DesktopHome() {
  return (
    <>
      <Navigation currentPage={NavigationPages.Home}/>
      <Box sx={styles.leftHalf}>
        <Typography variant='h1' sx={styles.heading} fontSize='3rem'>
          Robert Fuchs
        </Typography>
        <Typography variant='h2' fontSize='2rem' sx={styles.description}>
          Professional Software Developer, Sports Enthusiast and Optimist
        </Typography>
        <SocialMediaButtonGroup iconSize='80px' />
      </Box>
      <Box sx={styles.rightHalf}>
        <Box sx={styles.gradiant} zIndex={1000} />
        <Image
          src={TitlePicture}
          alt='picture of Robert Fuchs'
          layout='fill'
          objectFit='cover'
          sizes='50vw'
          priority
        />
      </Box>
    </>
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
    fontFamily: theme.fontFamilySans,
  },
  description: {
    fontFamily: theme.fontFamilySerif,
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
