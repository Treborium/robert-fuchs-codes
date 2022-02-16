import { Progress, Text, Box } from '@chakra-ui/react';
import React from 'react';

import useAnimation from '../hooks/useAnimation';

export interface SkillProps {
  label: string;
  value: number;
}

export default function Skill({ label, value, ...rest }: SkillProps) {
  const progress = useAnimation(value, 1500, 10);

  return (
    <Box>
      <Text>{label}</Text>
      <Progress value={value}/>
    </Box>
  );
}
