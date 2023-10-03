import api from "../plugins/api";
export default class ClientesApi {
  async buscarTodosOsClientes() {
    const { data } = await api.get('/clientes/');
    return data;
  }
  async adicionarCliente(cliente) {
    const { data } = await api.post('/clientes/', cliente);
    return data;
  }
  async atualizarCliente(cliente) {
    const { data } = await api.put(`/clientes/${cliente.id}/`, cliente);
    return data;
  }
  async excluirCliente(id) {
    const { data } = await api.delete(`/clientes/${id}/`);
    return data;
  }
}