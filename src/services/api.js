import axios from 'axios';

const api = axios.create({
  baseURL: 'http://161.35.8.47/',
});

export default api;
