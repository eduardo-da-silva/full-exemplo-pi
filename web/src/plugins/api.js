import axios from 'axios'
const MY_IP = import.meta.env.VITE_MY_IP
import { useAuthStore } from '../stores/auth'

const api = axios.create({
  baseURL: `http://${MY_IP}:19003/api/`
  // baseURL: 'http://192.168.0.17:19003/api/',
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const { token } = authStore
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
