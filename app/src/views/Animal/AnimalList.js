import { useEffect, useState, useCallback } from "react";
import { Card, Text, FAB } from "react-native-paper";
import { RefreshControl, StyleSheet, ScrollView, View } from "react-native";
import AnimalService from "../../services/animals";

export default function AnimalsList({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [animals, setAnimals] = useState([]);

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
          <Card style={styles.CardAnimal} key={animal.id}>
            <Card.Content>
              <View style={styles.CardPart}>
                <View style={styles.CardImagem}>
                  <Text>Foto</Text>
                </View>
                <View style={styles.CardDados}>
                  <View style={styles.CardDetalhes}>
                    <Text>{animal.nome}</Text>
                    <Text>{animal.idade}</Text>
                    <Text>{animal.status}</Text>
                    <Text>{animal.peso}</Text>
                  </View>
                  <View style={styles.CardSlash} />
                  <View style={styles.CardDetalhes}>
                    <Text>?</Text>
                    <Text>?</Text>
                    <Text>?</Text>
                    <Text>?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.CardSlash2} />
              <View style={styles.CardPart2}>
                <View style={styles.CardConsulta}>
                  <Text>Consulta</Text>
                </View>
                <View style={styles.CardConsulta}>
                  <Text>Consulta 2</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  CardAnimal: {
    width: "100",
    height: "auto",
    backgroundColor: "#667338",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    margin: 10,
  },
  CardPart: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
  },
  CardImagem: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  CardDados: {
    width: "75%",
    padding: 10,
    flexDirection: "row",
  },
  CardDetalhes: {
    width: "50%",
    textAlign: "center",
    padding: 5,
  },
  CardSlash: {
    width: 1,
    height: "100%",
    textAlign: "center",
    backgroundColor: "black",
  },
  CardSlash2: {
    width: "100%",
    height: 1,
    margin: 2,
    textAlign: "center",
    backgroundColor: "black",
  },
  CardPart2: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  CardConsulta: {
    width: "100%",
    height: "40%",
    padding: 10,
    margin: 5,
    backgroundColor: "#525A35",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
