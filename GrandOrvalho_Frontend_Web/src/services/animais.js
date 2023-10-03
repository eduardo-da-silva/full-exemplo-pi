import api from "../plugins/api";
export default class AnimaisApi {
  async buscarTodosOsAnimais() {
    const { data } = await api.get('/animais/');
    return data;
  }
  async adicionarAnimail(animais) {
    const { data } = await api.post('/animais/', animais);
    return data;
  }
  async atualizarAnimal(animais) {
    const { data } = await api.put(`/animais/${animais.id}/`, animais);
    return data;
  }
  async excluirAnimail(id) {
    const { data } = await api.delete(`/animais/${id}/`);
    return data;
  }
}