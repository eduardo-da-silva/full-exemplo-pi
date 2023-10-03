import api from '../plugins/api'

class EspeciesApi {
  async especiesApi() {
    const response = await api.get('/especies/')
    return response.data
  }
  async saveEspecie(especie) {
    let response
    if (especie.id) {
      response = await api.put(`/especies/${especie.id}/`, especie)
    } else {
      response = await api.post('/especies/', especie)
    }
    return response.data
  }
  async deleteEspecie(especie) {
    const response = await api.delete(`/especies/${especie.id}/`)
    return response.data
  }
}

export default new EspeciesApi()