import { forwardRef, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { CertificateOutline } from 'mdi-material-ui';
import Image from 'next/image';

import { ExperienceItemsStyles } from './styles';

import AWSCertifiedDeveloperAssociateBadge from '../../public/aws-certified-developer-associate.png';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const Certficates: React.FC<{}> = () => {
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
          <CertificateOutline sx={ExperienceItemsStyles.icon} />
          <Typography align='center'>Certificates</Typography>
        </Box>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>Certificates</DialogTitle>
        <DialogContent>
          <Button
            href='https://www.credly.com/badges/569d3eae-63df-4623-bd5f-715d95002ee2/public_url'
            component='a'
            target='_blank'
            rel='noopener'
            aria-label='verify AWS certified developer badge'
          >
            <Image src={AWSCertifiedDeveloperAssociateBadge}/>
          </Button>
          <Typography align='center'>Issued on February 05, 2022</Typography>
          <Typography align='center'>Expires on February 05, 2025</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
