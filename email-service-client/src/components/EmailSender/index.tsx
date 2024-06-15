import { FC, Fragment, useState } from 'react';
import { Box, TextField, debounce, Button, styled } from '@mui/material';
import { EmailProps } from '../../App';
import { v4 as uuid } from 'uuid';


const StyledBox = styled(Box)`
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.1);
    
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const EmailSender: FC = () => {
  const [newEmail, setNewEmail] = useState<EmailProps>({ id: uuid(), email: '', content: '' })
  const isValidEmail = '' !== newEmail.email.trim() && newEmail.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const isValidContent = '' !== newEmail.content.trim();

  console.log(isValidContent)

  console.log('Button !isValidEmail && !isValidContent', !isValidEmail && !isValidContent)

  const handleNewEmail = (key: keyof EmailProps, value: string) => {
    setNewEmail(prevValue => {
      return {
        ...prevValue,
        [key]: value,
      }
    })
  };

  return(
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
          <Button variant="contained" sx={{ width: '500px' }} disabled={!isValidEmail || !isValidContent} onClick={() => {}}>
            Send email
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};