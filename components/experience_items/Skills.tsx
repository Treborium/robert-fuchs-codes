import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { CodeTags } from 'mdi-material-ui';
import { forwardRef, useState } from 'react';
import Skill from '../Skill';
import { ExperienceItemsStyles } from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='right' ref={ref} {...props} />;
});

export const Skills: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button sx={ExperienceItemsStyles.button} onClick={handleClickOpen}>
        <Box>
          <CodeTags sx={ExperienceItemsStyles.icon} />
          <Typography align='center'>Skills</Typography>
        </Box>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='slide-in-dialog-for-skills'
        maxWidth='md'
        fullWidth
      >
        <DialogTitle>Skills</DialogTitle>
        <DialogContent sx={styles.content}>
          <Skill label='NodeJs' value={100} {...styles.skill} />
          <Skill label='TypeScript' value={100} {...styles.skill} />
          <Skill label='React' value={90} {...styles.skill} />
          <Skill label='AWS' value={70} {...styles.skill} />
          <Skill label='Python' value={80} {...styles.skill} />
          <Skill label='Java' value={90} {...styles.skill} />
          <Skill label='React Native' value={60} {...styles.skill} />
          <Skill label='Git' value={100} {...styles.skill} />
          <Skill label='Bash' value={80} {...styles.skill} />
          <Skill label='C++' value={60} {...styles.skill} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const styles = {
  content: {
    padding: '5vh 5vw',
  },
  skill: {
    marginBottom: '2vh',
  },
};
