import axios from 'axios';
export const baseRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:4000/',
});
