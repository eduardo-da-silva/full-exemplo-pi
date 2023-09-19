import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieAdd from './MovieAdd';
import MovieList from './MovieList';

const Stack = createNativeStackNavigator();

export default function Movie() {
  return (
    <Stack.Navigator initialRouteName="MovieList">
      <Stack.Screen
        name="MovieList"
        component={MovieList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieAdd"
        component={MovieAdd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
