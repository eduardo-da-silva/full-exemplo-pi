import axios from 'axios';
import { userState } from '../recoil/atoms/auth';
import { getRecoil } from 'recoil-nexus';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `http://${MY_IP}:19003/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((req) => {
  const currentUserState = getRecoil(userState);
  if (currentUserState.access != null) {
    req.headers.authorization = `Bearer ${currentUserState.access}`;
  }
  return req;
});

export default api;
