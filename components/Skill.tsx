import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import { theme } from './Theme';
import useAnimation from '../hooks/useAnimation';

export interface Props {
  label: string;
  value: number;
}

export default function Skill({ label, value }: Props) {
  const progress = useAnimation(value, 1500, 10);

  return (
    <Box>
      <Typography sx={styles.label} gutterBottom={false}>
        {label}
      </Typography>
      <CustomLinearProgress variant='determinate' value={progress} />
    </Box>
  );
}

const styles = {
  label: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
} as const;

const CustomLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#C4C4C4',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.fontColor,
  },
}));
