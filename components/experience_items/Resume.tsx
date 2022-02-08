import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  SvgIcon,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Numeric1Circle, Numeric2Circle, School, SourceBranch } from 'mdi-material-ui';
import { forwardRef, useState } from 'react';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';
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

  const items: TimelineItemModel[] = [
    {
      title: 'March 2022 - Present',
      cardTitle: 'Futurice',
      cardDetailedText: ['Senior Full Stack Engineer (March 2022 - Present)'],
    },
    {
      title: 'March 2017 - March 2022',
      cardTitle: 'GoTo Technologies (former LogMeIn)',
      cardDetailedText: [
        'Software Engineer (Aug 2020 - March 2022)',
        'Working Student (Aug 2017 - Aug 2020)',
        'Intern (March 2017 - Aug 2017)',
      ],
    },
    {
      title: 'Sep 2016 - Jul 2020',
      cardTitle: 'Karlsruhe University of Applied Science',
      cardDetailedText: [
        'Bachelor of Applied Science – BASc, Computer Science',
      ],
    },
  ];

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
          <Chrono
            items={items}
            mode='VERTICAL_ALTERNATING'
            cardWidth={400}
            useReadMore={false}
            hideControls
            disableClickOnCircle
            theme={{ primary: 'black', secondary: '', titleColor: 'black' }}
          >
            <div className='chrono-icons'>
              <Numeric2Circle />
              <Numeric1Circle />
              <School />
            </div>
          </Chrono>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
