import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.1.252.171:19003/api/',
});

export default api;
