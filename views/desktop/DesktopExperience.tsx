import React, { useState } from 'react';
import { Box, Link } from '@mui/material';

import Navigation from '../../components/Navigation';
import ExperiencesDialog from '../../components/ExperiencesDialog';
import RisingNumber from '../../components/RisingNumber';
import HighlightedSkills from '../../components/HighlightedSkills';
import { theme } from '../../components/Theme';

export default function DesktopExperience() {
  const [openDialog, setOpenDialog] = useState(false);
  const professionalExperienceStartDate = Date.parse('Aug 1, 2020');
  const codingExperienceStartDate = Date.parse('Sep 1, 2013');
  const inYears = 1000 * 60 * 60 * 24 * 365;

  return (
    <>
      <Navigation />
      <Box sx={styles.leftSide}>
        <HighlightedSkills />
        <Link
          sx={styles.link}
          color={theme.fontColor}
          onClick={() => setOpenDialog(true)}
        >
          see all…
        </Link>
        <ExperiencesDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
        />
      </Box>
      <Box sx={styles.rightSide}>
        <RisingNumber
          value={(Date.now() - professionalExperienceStartDate) / inYears}
          unit='years'
          label='Professional Experience'
          valueFontSize='3rem'
          labelFontSize='2rem'
        />
        <RisingNumber
          value={(Date.now() - codingExperienceStartDate) / inYears}
          unit='years'
          label='Coding Experience'
          valueFontSize='3rem'
          labelFontSize='2rem'
        />
      </Box>
    </>
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
    alignItems: 'flex-start',
    paddingTop: '20vh',
    paddingBottom: '10vh',
    paddingLeft: '10vw',
  },
  link: {
    color: theme.fontColor,
    alignSelf: 'flex-end',
    cursor: 'pointer',
  },
} as const;
