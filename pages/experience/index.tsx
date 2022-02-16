import React from 'react';

import { Skills } from '../../components/experience_items/Skills';
import { Certficates } from '../../components/experience_items/Certificates';
import { Resume } from '../../components/experience_items/Resume';
import {
  Box,
  ResponsiveValue,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Experience() {
  const flexDirection: ResponsiveValue<string> = useBreakpointValue({
    base: 'column',
    md: 'row',
  });

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      flexWrap='wrap'
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <Skills />
      <Certficates />
      <Resume />
    </Box>
  );
}
