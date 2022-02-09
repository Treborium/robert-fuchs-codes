import React from 'react';

// import { Skills } from '../../components/experience_items/Skills';
import { Certficates } from '../../components/experience_items/Certificates';
import { Resume } from '../../components/experience_items/Resume';
import { Box, Text } from '@chakra-ui/react';

export default function Experience() {
  return (
    <Box width='100vw' height='100vh'>
      {/* <Skills /> */}
      <Certficates />
      <Resume />
    </Box>
  );
}