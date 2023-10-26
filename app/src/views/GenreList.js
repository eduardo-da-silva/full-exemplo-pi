import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
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

  useEffect(() => {
    for (const genre of genres) {
      console.log(genre.name);
    }
  }, [genres]);

  const updateGenres = async () => {
    await getGenres();
  };

  return (
    <ScrollView style={styles.container}>
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
      <>
        {genres.map((genre) => (
          <List.Item key={genre.id} title={genre.name} />
        ))}
      </>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});
