import api from '../plugins/api'

class ConsultationService {
  async getAllConsultations() {
    const response = await api.get('/consultations/')
    return response.data
  }
  async saveConsultation(consultation) {
    const response = await api.post('/consultations/', consultation)
    return response.data
  }
  async deleteConsultation(consultation) {
    const response = await api.delete(`/consultationss/${consultation.id}/`)
    return response.data
  }
}

export default new ConsultationService()