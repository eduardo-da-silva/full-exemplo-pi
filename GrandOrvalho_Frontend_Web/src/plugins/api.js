import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:19003/api/'
})

export default api
