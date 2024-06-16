import { useEffect, useState } from 'react';

import API_ROOT from '../../config';
import { EmailProps } from '../models';


export const useGetEmails = () => {
  const [data, setData] = useState<Array<EmailProps>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchEmails = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_ROOT}/get-emails`);
      if (!response.ok) {
        throw new Error('Failed to fetch emails from server');
      }
      const fetchData = await response.json();
      setData(fetchData);
      setIsLoading(false);
      setFetchError(null);
    } catch (error) {
      console.error('Fetch error: ', error);
      setIsLoading(false);
      setFetchError('Cannot fetch data! Check server availability or your internet connection.');
    }
  };

  useEffect(() => {
    fetchEmails();

    const interval = setInterval(() => {
      fetchEmails();
    }, 30000);

    return () => clearInterval(interval);
  }, []);


  return {
    data,
    isLoading,
    fetchError,
  };
};
