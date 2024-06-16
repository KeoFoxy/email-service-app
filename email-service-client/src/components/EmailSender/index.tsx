import { FC, Fragment, useState } from 'react';
import { Box, TextField, debounce, Button, styled } from '@mui/material';
import { v4 as uuid } from 'uuid';

import { EmailProps } from '../../models';
import API_ROOT from '../../../config';
import { AlertNotification } from '..';


const StyledBox = styled(Box)`
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.1);
    
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

interface EmailStatus {
  status?: 'success' | 'error' | undefined;
  message?: string;
}

export const EmailSender: FC = () => {
  const [newEmail, setNewEmail] = useState<EmailProps>({ id: uuid(), email: '', content: '' });
  const [emailStatus, setEmailStatus] = useState<EmailStatus>({});
  const isValidEmail = '' !== newEmail.email.trim() && newEmail.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const isValidContent = '' !== newEmail.content.trim();
  const isErrorHandling = 'error' === emailStatus.status;
  const isSuccessSend = 'success' === emailStatus.status;

  const handleNewEmail = (key: keyof EmailProps, value: string) => {
    setNewEmail(prevValue => {
      return {
        ...prevValue,
        [key]: value,
      };
    });
  };

  const handleSendEmail = async () => {
    if (!isValidEmail) {
      return;
    }

    if (!isValidContent) {
      return;
    }

    try {
      const response = await fetch(`${API_ROOT}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmail),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      setEmailStatus(prevState => ({ ...prevState, status: 'success', message: 'Email send successfully!' }));
    } catch (e: unknown) {
      console.error('Error sending survey data: ', e);
      setEmailStatus(prevValue => ({
        ...prevValue,
        status: 'error',
        message: `Something went wrong! Error: ${(e as Error).message}`,
      }));
    }
  };

  return (
    <Fragment>
      <StyledBox>
        <Box>
          <TextField
            label="Send to"
            variant="outlined"
            fullWidth
            defaultValue={newEmail?.email}
            onChange={debounce(e => handleNewEmail('email', e.target.value), 300)}
            error={!isValidEmail}
            helperText="Invalid email!"
          />
        </Box>
        <Box>
          <TextField
            label="Your message"
            variant="outlined"
            fullWidth
            multiline
            defaultValue={newEmail?.content}
            onChange={debounce(e => handleNewEmail('content', e.target.value), 300)}
            maxRows={20}
          />
        </Box>
      </StyledBox>
      <Box display="flex" justifyContent="center">
        <Box
          position="absolute"
          bottom="0"
          sx={{ p: 5 }}
        >
          <Button variant="contained" sx={{ width: '500px' }} disabled={!isValidEmail || !isValidContent} onClick={handleSendEmail}>
            Send email
          </Button>
        </Box>
      </Box>
      {isErrorHandling && (
        <AlertNotification
          isOpen={isErrorHandling}
          status={emailStatus.status || 'error'}
          alertMessage={emailStatus.message || ''}
          onClose={() => setEmailStatus(prevValue => ({ ...prevValue, status: undefined }))}
        />
      )}
      {isSuccessSend && (
        <AlertNotification
          isOpen={isSuccessSend}
          status={emailStatus.status || 'success'}
          alertMessage={emailStatus.message || ''}
          onClose={() => setEmailStatus(prevValue => ({ ...prevValue, status: undefined }))}
        />
      )}
    </Fragment>
  );
};
