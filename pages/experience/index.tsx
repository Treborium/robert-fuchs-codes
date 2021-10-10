import React, { useState } from 'react';
import { Box, Link } from '@mui/material';

import { theme } from '../../components/Theme';
import Navigation from '../../components/Navigation';
import Page from '../../components/Page';
import RisingNumber from '../../components/RisingNumber';
import ExperiencesDialog from '../../components/ExperiencesDialog';
import HighlightedSkills from '../../components/HighlightedSkills';

export default function Experience() {
  const [openDialog, setOpenDialog] = useState(false);
  const professionalExperienceStartDate = Date.parse('Aug 1, 2020');
  const codingExperienceStartDate = Date.parse('Sep 1, 2013');
  const inYears = 1000 * 60 * 60 * 24 * 365;

  return (
    <Page>
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
        />
        <RisingNumber
          value={(Date.now() - codingExperienceStartDate) / inYears}
          unit='years'
          label='Coding Experience'
        />
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
    cursor: 'pointer',
  },
} as const;
