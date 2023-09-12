import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import genreService from '../services/genres';
import { useEffect, useState } from 'react';

export default function GenreAdd({ navigation }) {
  const [genres, setGenres] = useState([]);

  useEffect(async () => {
    const data = await genreService.getAllGenres();
    setGenres(data);
  }, []);

  async function updateGenres() {
    const data = await genreService.getAllGenres();
    setGenres(data);
  }

  return (
    <View style={styles.container}>
      <Text>Meus gêneros de filmes!</Text>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
      <Button title="Atualizar" onPress={() => updateGenres()} />
      <Button title="+" onPress={() => navigation.navigate('GenreAdd')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
