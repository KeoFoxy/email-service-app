import { FC } from 'react';
import { Alert, Snackbar, Typography } from '@mui/material';


interface Props {
  isOpen: boolean;
  status: 'success' | 'error';
  alertMessage: string;
  onClose: () => void;
}

export const AlertNotification: FC<Props> = ({ isOpen, status, alertMessage, onClose }) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={10000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={onClose} severity={status}>
        <Typography fontWeight="bold" fontSize="16px">{alertMessage}</Typography>
      </Alert>
    </Snackbar>
  );
};
