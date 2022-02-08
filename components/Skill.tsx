import React from 'react';
import {
  Box,
  BoxProps,
  LinearProgress,
  Tooltip,
  Typography,
} from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

import useAnimation from '../hooks/useAnimation';

export interface Props extends BoxProps {
  label: string;
  value: number;
}

export default function Skill({ label, value, ...rest }: Props) {
  const progress = useAnimation(value, 1500, 10);

  return (
    <Box sx={styles.container} {...rest}>
      <Typography sx={styles.label} gutterBottom={false}>
        {label}
      </Typography>
      <Tooltip title={`${value}/100`} arrow>
        <CustomLinearProgress variant='determinate' value={progress} />
      </Tooltip>
    </Box>
  );
}

const styles = {
  container: {
    width: '40vw',
  },
  label: {
    fontSize: '1.5rem',
    marginBottom: '10px',
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
    backgroundColor: '#000000',
  },
}));
