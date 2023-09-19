import * as React from "react";
import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/views/Home";
import AnimalList from "./src/views/AnimalList";
import ConsultationList from "./src/views/ConsultationList";
import User from "./src/views/User";


const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <PaperProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Animal" component={AnimalList} />
        <Drawer.Screen name="Consulta" component={ConsultationList} />
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
