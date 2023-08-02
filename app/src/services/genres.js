import api from '../plugins/api'

class GenreService {
  async getAllGenres() {
    const response = await api.get('/genres/')
    return response.data
  }
  async saveGenre(genre) {
    const response = await api.post('/genres/', genre)
    return response.data
  }
  async deleteGenre(genre) {
    const response = await api.delete(`/genres/${genre.id}/`)
    return response.data
  }
}

export default new GenreService()
