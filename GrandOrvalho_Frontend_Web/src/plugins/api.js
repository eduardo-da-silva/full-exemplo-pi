import axios from 'axios'
/*const MY_IP = import.meta.env.VITE_MY_IP*/

const api = axios.create({
  baseURL: `http://0.0.0.0:19003/api/`,
  // baseURL: 'http://192.168.0.17:19003/api/',
})

export default api