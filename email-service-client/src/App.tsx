import { Autocomplete, Box, TextField } from '@mui/material';
import { FC, useState } from 'react';

import { EmailDetails, EmailSender } from './components';
import { useGetEmails } from './hooks/useGetEmails';
import { EmailProps } from './models';


export const App: FC = () => {
  const { data } = useGetEmails();

  const [selectedEmail, setSelectedEmail] = useState<EmailProps | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSelect = (newValue: EmailProps | undefined) => {
    setSelectedEmail(newValue);
    setIsModalOpen(true);
  };

  return (
    <Box width="500px">
      <Box padding="12px 0">
        <Autocomplete
          disablePortal
          options={data}
          getOptionLabel={(option) => option.email}
          value={data.find(item => item.id === selectedEmail?.id)}
          onChange={(_, value) => handleSearchSelect(null === value ? undefined : value)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      </Box>
      <EmailSender />
      <EmailDetails data={selectedEmail} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};
