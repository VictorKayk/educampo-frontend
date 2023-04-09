import { useMutation, useQuery, useQueryClient } from 'react-query';
import { httpClient } from '../utils/httpClient';
import { IAssociado } from '../types/associate';

export function useAssociates() {
  const queryClient = useQueryClient();

  const api = httpClient('https://educampo-backend-production-8343.up.railway.app');

  function getAssociates() {
    return useQuery('associates-list', async () => {
      const response = await api.get('/associados');
      return response.data as IAssociado[] | [];
    });
  }

  function getAssociatesOrAssociateByName(name?: string) {
    return useQuery(name ? 'associates-list' : ['associates-list', name], async () => {
      let response;
      if (name) {
        response = await api.get(`/associados/nome/${name}`);
        response.data = [response.data];
      } else {
        response = await api.get('/associados');
      }
      return response.data as IAssociado[] | [];
    });
  }

  function getAssociateById(id: string) {
    return useQuery(['associates-list', id], async () => {
      const response = await api.get(`/associados/${id}`);
      return response.data as IAssociado;
    });
  }

  function getAssociateByName(name: string) {
    return useQuery(['associates-list', name], async () => {
      const response = await api.get(`/associados/nome/${name}`);
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

  function updateAssociate(id: string) {
    return useMutation(async (data: IAssociado) => {
      const response = await api.put('/associados', data);
      return response.data;
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries('associates-list');
        queryClient.invalidateQueries(['associates-list', id]);
      }
    });
  }

  return {
    getAssociates,
    createNewAssociate,
    getAssociateById,
    getAssociateByName,
    getAssociatesOrAssociateByName,
    updateAssociate
  };
}
