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
import { SourceBranch } from 'mdi-material-ui';
import { forwardRef, useState } from 'react';
import { ExperienceItemsStyles } from './styles';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='left' ref={ref} {...props} />;
});

export const Resume: React.FC<{}> = () => {
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
          <SourceBranch sx={ExperienceItemsStyles.icon} />
          <Typography align='center'>Resume</Typography>
        </Box>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>Resume</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
