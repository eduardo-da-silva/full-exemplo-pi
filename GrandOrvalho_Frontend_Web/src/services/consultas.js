import api from "../plugins/api";
export default class ConsultasApi {
  async buscarTodasAsConsultas() {
    const { data } = await api.get('/consultas/');
    return data;
  }
  async adicionarConsulta(consulta) {
    const { data } = await api.post('/consultas/', consulta);
    return data;
  }
  async atualizarConsulta(consulta) {
    const { data } = await api.put(`/consultas/${consulta.id}/`, consulta);
    return data;
  }
  async excluirConsulta(id) {
    const { data } = await api.delete(`/consultas/${id}/`);
    return data;
  }
}