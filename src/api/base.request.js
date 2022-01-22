import axios from 'axios';

export const baseRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://roadmap-project.herokuapp.com/api',
});
