import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.248:19003/api/',
});

export default api;
