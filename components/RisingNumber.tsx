import React from 'react';
import { Box, Typography } from '@mui/material';

import useAnimation from '../hooks/useAnimation';

interface Props {
  value: number;
  label: string;
  unit: string;
}

export default function RisingNumber({ value, label, unit }: Props) {
  const progress = useAnimation(value, 1500, 0.1);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.valueWithUnit}>
        <Typography fontSize='3rem'>{progress.toPrecision(2)}</Typography>
        <Typography fontSize='2rem' sx={styles.unit}>{unit}</Typography>
      </Box>
      <Typography fontSize='2rem'>{label}</Typography>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  valueWithUnit: {
    display: 'flex',
    flexDirection: 'row',
  },
  unit: {
    alignSelf: 'center',
    paddingX: '12px',
  }
} as const;
