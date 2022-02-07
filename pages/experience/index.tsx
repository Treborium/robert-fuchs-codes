import React from 'react';

import { Box, Button, IconButton, Typography } from '@mui/material';
import { CertificateOutline, SourceBranch, CodeTags } from 'mdi-material-ui';

export default function Experience() {
  return (
    <Box sx={styles.experiences}>
      <Button sx={styles.button}>
        <Box>
          <CodeTags sx={styles.icon} />
          <Typography align='center'>Skills</Typography>
        </Box>
      </Button>
      <Button sx={styles.button}>
        <Box>
          <CertificateOutline sx={styles.icon} />
          <Typography align='center'>Certificates</Typography>
        </Box>
      </Button>
      <Button sx={styles.button}>
        <Box>
          <SourceBranch sx={styles.icon} />
          <Typography align='center'>Resume</Typography>
        </Box>
      </Button>
    </Box>
  );
}

const styles = {
  experiences: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    color: 'white',
  },
  icon: {
    height: '8vw',
    width: '8vw',
  },
} as const;
