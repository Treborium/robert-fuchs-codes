import { BoxProps } from '@mui/system';
import React from 'react';

import Skill from './Skill';

export default function HighlightedSkills({ ...rest }: BoxProps) {
  return (
    <>
      <Skill label='NodeJs' value={80} {...rest} />
      <Skill label='AWS' value={60} {...rest} />
      <Skill label='React' value={100} {...rest} />
      <Skill label='Java' value={100} {...rest} />
      <Skill label='Python' value={80} {...rest} />
    </>
  );
}
