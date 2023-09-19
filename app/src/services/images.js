import api from '../plugins/api';

class ImageService {
  async uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/media/images/', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    return response.data;
  }
}

export default new ImageService();
