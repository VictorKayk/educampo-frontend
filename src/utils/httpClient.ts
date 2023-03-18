import axios from 'axios';

export const httpClient = (url: string) => axios.create({
  baseURL: url,
});
