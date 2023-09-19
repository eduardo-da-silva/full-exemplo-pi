import * as React from 'react';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/views/Home';
import Genre from './src/views/Genre';
import Movie from './src/views/Movie';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <PaperProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Gêneros" component={Genre} />
        <Drawer.Screen name="Filmes" component={Movie} />
      </Drawer.Navigator>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}
