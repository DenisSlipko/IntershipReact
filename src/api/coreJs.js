import axios from 'axios';
export const instance = axios.create({
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:4000/',
});
