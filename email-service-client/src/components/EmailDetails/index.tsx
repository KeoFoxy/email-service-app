import { FC, useState, useEffect } from 'react';
import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { EmailProps } from '../../App';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  maxHeight: '50%',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 8,
  p: 4,
};

interface Props {
  open: boolean;
  data: EmailProps | undefined;
  onClose: () => void;
}

export const EmailDetails: FC<Props> = ({ data, open, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography color="black" fontWeight="bold" variant="h5">
            Email: {data?.email}
          </Typography>
          <Typography color="black" fontSize="18px" sx={{ mt: 2 }}>
            Message: {data?.content}
          </Typography>
        </Box>
      </Fade>
      {/*<Box>*/}
      {/*  <Typography id="modal-modal-title" variant="h6" component="h2">*/}
      {/*    Email: {data?.email}*/}
      {/*  </Typography>*/}
      {/*  <Typography id="modal-modal-description" sx={{ mt: 2 }}>*/}
      {/*    Message: {data?.content}*/}
      {/*  </Typography>*/}
      {/*</Box>*/}
    </Modal>
  );
};
