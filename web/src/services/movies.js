import api from '../plugins/api'

class MovieService {
  async getAllMovies() {
    const response = await api.get('/movies/')
    return response.data
  }
  async saveMovie(movie) {
    let response
    if (movie.id) {
      response = await api.put(`/movies/${movie.id}/`, movie)
    } else {
      response = await api.post('/movies/', movie)
    }
    return response.data
  }
}

export default new MovieService()
