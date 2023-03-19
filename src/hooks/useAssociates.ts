import { useMutation, useQuery, useQueryClient } from 'react-query';
import { httpClient } from '../utils/httpClient';
import { IAssociado } from '../types/associate';

export function useAssociates() {
  const queryClient = useQueryClient();

  const api = httpClient('https://educampo-backend-production-8343.up.railway.app');

  function getAssociates() {
    return useQuery('associates-list', async () => {
      const response = await api.get('/associados');
      return response.data  as IAssociado[] | [];
    });
  }

  function getAssociateById(id: string) {
    return useQuery(['associates-list', id], async () => {
      const response = await api.get(`/associados/${id}`);
      return response.data as IAssociado;
    });
  }

  function createNewAssociate() {
    return useMutation(async (data: IAssociado) => {
      const response = await api.post('/associados', data);
      return response.data;
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries('associates-list');
      }
    });
  }

  return {
    getAssociates,
    createNewAssociate,
    getAssociateById
  };
}
