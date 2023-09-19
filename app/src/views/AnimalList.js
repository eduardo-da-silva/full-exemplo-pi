import { useEffect, useState, useCallback } from "react";
import { Card, Text, FAB } from "react-native-paper";
import { RefreshControl, StyleSheet, ScrollView, View } from "react-native";
import AnimalService from "../services/animals";

export default function AnimalsList({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [Animals, setAnimals] = useState([]);

  const fetchAnimals = async () => {
    const data = await AnimalService.getAllAnimals();
    setAnimals(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchAnimals();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {animals.map((animal) => (
          <Card style={styles.card} key={animal.id}>
            <Card.Content>
              <Text variant="titleLarge">{animal.title}</Text>
              <Text variant="bodyMedium">
                {animal.genre} ({animal.year})
              </Text>
            </Card.Content>
            <Card.Cover
              style={styles.cover}
              source={{ uri: animal.cover.url }}
            />
          </Card>
        ))}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("AnimalDetail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    margin: 10,
  },
  cover: {
    height: 400,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
