import React from 'react';
import { Box, IconButton } from '@mui/material';
import { GitHub, Linkedin, Mail } from 'react-feather';

import { theme } from './Theme';

export default function SocialMediaButtonGroup() {
  const iconProps = {
    size: '80px',
    strokeWidth: '1px',
    color: theme.fontColor,
  };

  return (
    <Box sx={styles.icons}>
      <IconButton>
        <Linkedin {...iconProps} />
      </IconButton>
      <IconButton>
        <GitHub {...iconProps} />
      </IconButton>
      <IconButton>
        <Mail {...iconProps} />
      </IconButton>
    </Box>
  );
}

const styles = {
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
} as const;
