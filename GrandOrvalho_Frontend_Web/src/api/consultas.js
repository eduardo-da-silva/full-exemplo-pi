import axios from 'axios';
export default class ConsultasApi {
  async buscarTodasAsConsultas() {
    const { data } = await axios.get('/consultas/');
    return data;
  }
  async adicionarConsulta(consulta) {
    const { data } = await axios.post('/consultas/', consulta);
    return data;
  }
  async atualizarConsulta(consulta) {
    const { data } = await axios.put(`/consultas/${consulta.id}/`, consulta);
    return data;
  }
  async excluirConsulta(id) {
    const { data } = await axios.delete(`/consultas/${id}/`);
    return data;
  }
}