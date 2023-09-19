import * as React from "react";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/views/Home";
import User from "./src/views/User";
import Animal from "./src/views/Animal";
import Consultaition from "./src/views/Consultation";

const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <PaperProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Animal" component={Animal} />
        <Drawer.Screen name="Consulta" component={Consultaition} />
        <Drawer.Screen name="User" component={User} />
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
