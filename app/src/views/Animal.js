import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimalList from "./AnimalList";
import AnimalDatail from "./AnimalDatail";

const Stack = createNativeStackNavigator();

export default function Animal() {
  return (
    <Stack.Navigator initialRouteName="AnimalList">
      <Stack.Screen
        name="AnimalList"
        component={AnimalList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnimalDatail"
        component={AnimalDatail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
