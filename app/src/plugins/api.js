import axios from 'axios';

const MY_IP = process.env.MY_IP;

const api = axios.create({
  baseURL: `http://${MY_IP}:19003/api/`,
});

export default api;
