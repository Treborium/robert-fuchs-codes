import React from 'react';
import { Box, Link, Typography } from '@mui/material';

import { theme } from '../../components/Theme';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import Skill from '../../components/Skill';
import RisingNumber from '../../components/RisingNumber';

export default function Experience() {
  return (
    <Page>
      <Navigation />
      <Box sx={styles.leftSide}>
        <Skill label='NodeJs' value={80} />
        <Skill label='AWS' value={60} />
        <Skill label='React' value={100} />
        <Skill label='Java' value={100} />
        <Skill label='Python' value={80} />
        {/* TODO: Add see all dialog */}
        <Link sx={styles.link}>see all…</Link>
      </Box>
      <Box sx={styles.rightSide}>
        <RisingNumber
          value={1.2}
          unit='years'
          label='Professional Experience'
        />
        <RisingNumber value={8.3} unit='years' label='Coding Experience' />
      </Box>
    </Page>
  );
}

const styles = {
  leftSide: {
    height: '100vh',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: '45px',
    paddingRight: '10%',
    paddingTop: '20vh',
    paddingBottom: '10vh',
  },
  rightSide: {
    height: '100vh',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20vh',
    paddingBottom: '10vh',
  },
  link: {
    color: theme.fontColor,
    alignSelf: 'flex-end',
  },
} as const;
