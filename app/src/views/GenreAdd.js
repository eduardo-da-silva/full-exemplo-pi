import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

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
      <Text style={styles.title} variant="headlineMedium">
        Novo Gênero
      </Text>
      <TextInput
        label="Gênero"
        style={{ width: '90%', marginBottom: 10 }}
        onChangeText={(text) => setGenre({ name: text })}
      />
      <Button icon="content-save" mode="elevated" onPress={() => addGenre()}>
        Salvar
      </Button>
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
  title: {
    marginTop: 20,
    marginBottom: 20,
  },
});
