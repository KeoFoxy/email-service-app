import { Autocomplete, Box, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { EmailDetails, EmailSender } from './components';


export interface EmailProps {
  id: string;
  email: string;
  content: string;
}

export const App: FC = () => {
  // MockData
  const searchResults: Array<EmailProps> = [
    { id: uuid(), email: 'test1@email.com', content: 'Hello World' },
    { id: uuid(), email: 'test2@email.com', content: 'I love anime' },
    { id: uuid(), email: 'test3@email.com', content: 'Hahahehe' }
  ];

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
          options={searchResults}
          getOptionLabel={(option) => option.email}
          value={searchResults.find(item => item.id === selectedEmail?.id)}
          onChange={(_, value) => handleSearchSelect(value === null ? undefined : value)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
      </Box>
      <EmailSender />
      <EmailDetails data={selectedEmail} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};
