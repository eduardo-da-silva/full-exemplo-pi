import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button, List } from 'react-native-paper';

import genreService from '../services/genres';
import { useEffect, useState } from 'react';

export default function GenreAdd({ navigation }) {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    const data = await genreService.getAllGenres();
    setGenres(data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const updateGenres = async () => {
    await getGenres();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Gêneros de Filmes</Text>
      <>
        {genres.map((genre) => (
          <List.Item key={genre.id} title={genre.name} />
        ))}
      </>
      <View style={styles.buttons}>
        <Button icon="reload" mode="elevated" onPress={() => updateGenres()}>
          Atualizar
        </Button>
        <Button
          icon="plus-box"
          mode="elevated"
          onPress={() => navigation.navigate('GenreAdd')}
        >
          Adicionar
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});
