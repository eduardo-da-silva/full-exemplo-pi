import axios from 'axios';
export default class RacasApi {
  async buscarTodasAsRacas() {
    const { data } = await axios.get('/racas/');
    return data;
  }
  async adicionarRaca(raca) {
    const { data } = await axios.post('/racas/', raca);
    return data;
  }
  async atualizarRaca(raca) {
    const { data } = await axios.put(`/racas/${raca.id}/`, raca);
    return data;
  }
  async excluirRaca(id) {
    const { data } = await axios.delete(`/racas/${id}/`);
    return data;
  }
}