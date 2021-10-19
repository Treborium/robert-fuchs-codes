import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

import useAnimation from '../hooks/useAnimation';
import { theme } from './Theme';

interface Props extends BoxProps {
  value: number;
  label: string;
  unit: string;
  valueFontSize: string;
  labelFontSize: string;
  centerValue?: boolean;
}

export default function RisingNumber({
  value,
  label,
  unit,
  valueFontSize,
  labelFontSize,
  centerValue,
  ...rest
}: Props) {
  const progress = useAnimation(value, 1500, 0.1);
  const cssCenter = centerValue
    ? { justifyContent: 'center' }
    : { justifyContent: 'flex-start' };

  return (
    <Box sx={styles.container} {...rest}>
      <Box sx={{ ...styles.valueWithUnit, ...cssCenter }}>
        <Typography fontSize={valueFontSize}>
          {progress.toPrecision(2)}
        </Typography>
        <Typography fontSize={labelFontSize} sx={styles.unit}>
          {unit}
        </Typography>
      </Box>
      <Typography fontSize={labelFontSize}>{label}</Typography>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.fontFamilySans,
  },
  valueWithUnit: {
    display: 'flex',
    flexDirection: 'row',
  },
  unit: {
    alignSelf: 'center',
    paddingX: '12px',
  },
} as const;
