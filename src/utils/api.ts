import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://educampo-backend-production-8343.up.railway.app/'
});
