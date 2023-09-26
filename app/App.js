import * as React from 'react';
import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { RecoilRoot } from 'recoil';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/views/Home';
import Genre from './src/views/Genre';
import Movie from './src/views/Movie';
import Login from './src/views/Login';

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Gêneros" component={Genre} />
          <Drawer.Screen name="Filmes" component={Movie} />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <MainDrawer />
    </RecoilRoot>
  );
}
