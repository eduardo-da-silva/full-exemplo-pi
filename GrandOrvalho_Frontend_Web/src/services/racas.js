import api from '../plugins/api'

class RacasApi {
  async racasApi() {
    const response = await api.get('/racas/')
    return response.data
  }
  async saveRaca(raca) {
    let response
    if (raca.id) {
      response = await api.put(`/racas/${raca.id}/`, raca)
    } else {
      response = await api.post('/racas/', raca)
    }
    return response.data
  }
  async deleteRacas(raca) {
    const response = await api.delete(`/racas/${raca.id}/`)
    return response.data
  }
}

export default new RacasApi()