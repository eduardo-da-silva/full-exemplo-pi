import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import genreService from '../services/genres';
import { useState } from 'react';

export default function GenreAdd({ navigation }) {
  const [genre, setGenre] = useState({ name: '' });

  async function addGenre() {
    await genreService.saveGenre(genre);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Novo Gênero!</Text>
      <TextInput onChangeText={(text) => setGenre({ name: text })} />
      <Button title="Salvar" onPress={() => addGenre()} />
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
