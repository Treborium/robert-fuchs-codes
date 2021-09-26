import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { theme } from './Theme';
import Skill from './Skill';
import HighlightedSkills from './HighlightedSkills';

export interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ExperiencesDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogTitle>All of my skills</DialogTitle>
      <DialogContent sx={styles.content}>
        {/* TODO: Add bottom margin between skills */}
        <HighlightedSkills />
        <Skill label='React Native' value={60} />
        <Skill label='Git' value={100} />
        <Skill label='Bash' value={80} />
        <Skill label='C++' value={60} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={styles.button}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const styles = {
  content: {
    padding: '5vh 5vw',
  },
  button: {
    color: theme.fontColor,
  },
} as const;
