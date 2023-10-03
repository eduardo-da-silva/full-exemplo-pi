import axios from 'axios';
export default class ClientesApi {
  async buscarTodosOsClientes() {
    const { data } = await axios.get('/clientes/');
    return data;
  }
  async adicionarCliente(cliente) {
    const { data } = await axios.post('/clientes/', cliente);
    return data;
  }
  async atualizarCliente(cliente) {
    const { data } = await axios.put(`/clientes/${cliente.id}/`, cliente);
    return data;
  }
  async excluirCliente(id) {
    const { data } = await axios.delete(`/clientes/${id}/`);
    return data;
  }
}