import axios from 'axios';
export default class EspeciesApi {
  async buscarTodasAsEspecies() {
    const { data } = await axios.get('/especies/');
    return data;
  }
  async adicionarEspecie(especie) {
    const { data } = await axios.post('/especies/', especie);
    return data;
  }
  async atualizarEspecie(especie) {
    const { data } = await axios.put(`/especies/${especie.id}/`, especie);
    return data;
  }
  async excluirEspecie(id) {
    const { data } = await axios.delete(`/especies/${id}/`);
    return data;
  }
}