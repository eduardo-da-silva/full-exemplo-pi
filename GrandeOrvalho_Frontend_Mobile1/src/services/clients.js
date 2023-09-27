import api from "../plugins/api";

class ClientService {
  async getAllClients() {
    const response = await api.get("/clients/");
    return response.data;
  }
  async saveClient(client) {
    const response = await api.post("/clients/", client);
    return response.data;
  }
  async deleteClient(client) {
    const response = await api.delete(`/clients/${client.id}/`);
    return response.data;
  }
}

export default new ClientService();
