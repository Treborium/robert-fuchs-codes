import React, { useState } from 'react';
import { Box, Link } from '@mui/material';

import HamburgerMenu from '../../components/HamburgerMenu';
import HighlightedSkills from '../../components/HighlightedSkills';
import ExperiencesDialog from '../../components/ExperiencesDialog';
import RisingNumber from '../../components/RisingNumber';
import { theme } from '../../components/Theme';

export default function MobileExperience() {
  const [openDialog, setOpenDialog] = useState(false);
  const professionalExperienceStartDate = Date.parse('Aug 1, 2020');
  const codingExperienceStartDate = Date.parse('Sep 1, 2013');
  const inYears = 1000 * 60 * 60 * 24 * 365;

  return (
    <>
      <HamburgerMenu />
      <Box sx={styles.container}>
        <HighlightedSkills sx={{ width: '100%', marginBottom: '3vh' }} />
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
        <RisingNumber
          sx={styles.risingNumber}
          value={(Date.now() - professionalExperienceStartDate) / inYears}
          unit='years'
          label='Professional Experience'
          valueFontSize='2.5rem'
          labelFontSize='1.5rem'
          centerValue
        />
        <RisingNumber
          value={(Date.now() - codingExperienceStartDate) / inYears}
          unit='years'
          label='Coding Experience'
          valueFontSize='2.5rem'
          labelFontSize='1.5rem'
          centerValue
        />
      </Box>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    paddingX: '5vw',
    paddingTop: '10vh',
  },
  link: {
    color: theme.fontColor,
    alignSelf: 'flex-end',
    cursor: 'pointer',
    marginBottom: '5vh',
  },
  risingNumber: {
    marginBottom: '5vh',
  },
} as const;
