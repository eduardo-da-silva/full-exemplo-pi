import api from '../plugins/api';

class ImageService {
  async uploadImage(selectedImage) {
    const uri =
      Platform.OS === 'android'
        ? selectedImage.uri
        : selectedImage.uri.replace('file://', '');
    const filename = selectedImage.uri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    formData.append('file', {
      uri,
      name: `image.${ext}`,
      type,
    });
    try {
      const { data } = await api.post('media/images/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new ImageService();
