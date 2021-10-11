import React from 'react';
import { Box, IconButton } from '@mui/material';
import { GitHub, Linkedin, Mail } from 'react-feather';

import { theme } from './Theme';

interface Props {
  iconSize: string;
}

export default function SocialMediaButtonGroup({ iconSize }: Props) {
  const iconProps = {
    size: iconSize,
    strokeWidth: '1px',
    color: theme.fontColor,
  };

  return (
    <Box sx={styles.icons}>
      <IconButton
        href='https://www.linkedin.com/in/robert-f-0b87a218a'
        target='_blank'
        rel='noopener'
        aria-label='go to Roberts LinkedIn profile'
      >
        <Linkedin {...iconProps} />
      </IconButton>
      <IconButton
        href='https://github.com/Treborium/robert-fuchs-codes'
        target='_blank'
        rel='noopener'
        aria-label='go to Roberts GitHub profile'
      >
        <GitHub {...iconProps} />
      </IconButton>
      <IconButton
        href='mailto:robert@fuchs-mail.com'
        aria-label='send Robert an email'
      >
        <Mail {...iconProps} />
      </IconButton>
    </Box>
  );
}

const styles = {
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
} as const;
