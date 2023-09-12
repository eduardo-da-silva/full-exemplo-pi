import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/views/Home';
import Genre from './src/views/Genre';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Gêneros" component={Genre} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}
