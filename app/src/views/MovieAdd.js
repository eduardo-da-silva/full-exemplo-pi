import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Image, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

import genreService from '../services/genres';
import imageService from '../services/images';
import movieService from '../services/movies';

export default function MovieAdd({ navigation }) {
  const [isFocus, setIsFocus] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    rating: '',
    genre: null,
  });

  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    const data = await genreService.getAllGenres();
    setGenres(data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const save = async () => {
    const image = await imageService.uploadImage(file);
    console.log(image);
    setMovie((movie) => ({
      ...movie,
      cover_attachment_key: image.attachment_key,
    }));
    console.log(movie);
    const data = await movieService.saveMovie(movie);
    console.log(data);
    navigation.goBack();
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setFile(result.assets[0]);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      <Button mode="contained" onPress={pickImageAsync}>
        Selecionar imagem
      </Button>
      <TextInput
        label="Título"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) =>
          setMovie((movie) => ({ ...movie, title: text }))
        }
      />
      <TextInput
        label="Ano de Lançamento"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) => setMovie((movie) => ({ ...movie, year: text }))}
      />
      <TextInput
        label="Avaliação"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) =>
          setMovie((movie) => ({ ...movie, rating: text }))
        }
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={genres}
        maxHeight={300}
        labelField="name"
        valueField="id"
        placeholder={isFocus ? '...' : 'Selecionar Gênero'}
        value={movie.genre}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setMovie((movie) => ({ ...movie, genre: item.id }));
          setIsFocus(false);
        }}
      />
      <Button mode="contained" onPress={save}>
        Adicionar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '80%',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
