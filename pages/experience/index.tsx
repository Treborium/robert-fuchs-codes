import React from 'react';

import { Skills } from '../../components/experience_items/Skills';
import { Certficates } from '../../components/experience_items/Certificates';
import { Resume } from '../../components/experience_items/Resume';
import { Box, Text } from '@chakra-ui/react';

export default function Experience() {
  return (
    <Box sx={styles.experiences}>
      {/* <Skills />
      <Certficates />
      <Resume /> */}
      <Text>Skills</Text>
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
