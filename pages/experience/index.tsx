import React from 'react';
import { Box } from '@mui/material';

import { Skills } from '../../components/experience_items/Skills';
import { Certficates } from '../../components/experience_items/Certificates';
import { Resume } from '../../components/experience_items/Resume';

export default function Experience() {
  return (
    <Box sx={styles.experiences}>
      <Skills />
      <Certficates />
      <Resume />
    </Box>
  );
}

const styles = {
  experiences: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
} as const;
