import { useEffect, useState, useCallback } from 'react';
import { Card, Text, FAB } from 'react-native-paper';
import { RefreshControl, StyleSheet, ScrollView, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import movieService from '../services/movies';
import { userState } from '../recoil/atoms/auth';

export default function MovieList({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [movies, setMovies] = useState([]);
  const currentUserState = useRecoilValue(userState);

  const fetchMovies = async () => {
    const data = await movieService.getAllMovies();
    setMovies(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchMovies();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {movies.map((movie) => (
          <Card style={styles.card} key={movie.id}>
            <Card.Content>
              <Text variant="titleLarge">{movie.title}</Text>
              <Text variant="bodyMedium">
                {movie.genre} ({movie.year})
              </Text>
            </Card.Content>
            <Card.Cover
              style={styles.cover}
              source={{ uri: movie.cover.url }}
            />
          </Card>
        ))}
      </ScrollView>
      {currentUserState.loggedIn && (
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('MovieAdd')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 10,
  },
  cover: {
    height: 400,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
