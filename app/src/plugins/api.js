import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const { MY_IP } = process.env;
// const get_access = async () => await SecureStore.getItemAsync('access');
// const access = get_access();
// console.log(access == undefined);

const api = axios.create({
  baseURL: `http://${MY_IP}:19003/api/`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${access}`,
  },
});

api.interceptors.request.use(async (req) => {
  // await SecureStore.deleteItemAsync('access');
  const access = (await SecureStore.getItemAsync('access')) || null;
  // console.log(access);
  req.headers.authorization = access ? `Bearer ${access}` : '';
  // console.log(req.headers.authorization);
  return req;
});
export default api;
