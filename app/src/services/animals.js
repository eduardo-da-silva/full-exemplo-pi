import api from "../plugins/api";

class AnimalService {
  async getAllAnimals() {
    const response = await api.get("/animals/");
    return response.data;
  }
}

export default new AnimalService();
