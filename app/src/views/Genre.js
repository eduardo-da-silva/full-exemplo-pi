import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GenreAdd from './GenreAdd';
import GenreList from './GenreList';

const Stack = createNativeStackNavigator();

export default function Genre() {
  return (
    <Stack.Navigator initialRouteName="GenreList">
      <Stack.Screen
        name="GenreList"
        component={GenreList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GenreAdd"
        component={GenreAdd}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
