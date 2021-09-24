import React from 'react';
import { Container } from '@mui/material';

import { theme } from './Theme';

export interface Props {
  children?: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={styles.container}
      children={children}
    />
  );
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor: theme.backgroundColor,
    height: '100vh',
  },
} as const;
