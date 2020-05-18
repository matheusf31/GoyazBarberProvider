import axios from 'axios';

const api = axios.create({
  baseURL: 'api_url_here',
});

export default api;
