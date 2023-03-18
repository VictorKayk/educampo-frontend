import { useQuery } from 'react-query';
import { httpClient } from '../utils/httpClient';

export function useAssociates() {
  const api = httpClient('https://educampo-backend-production-8343.up.railway.app');

  function getAssociates() {
    return useQuery('associates-list', async () => {
      const response = await api.get('/associados');
      return response.data;
    });
  }

  return {
    getAssociates
  };
}
