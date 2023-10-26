import api from '../plugins/api'

class AuthService {
  async login(user) {
    const response = await api.post('/token/', user)
    return response.data
  }
}

export default new AuthService()
