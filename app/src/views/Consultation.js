import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConsultationList from "./ConsultationList";
import ConsultationDatail from "./ConsultationDatail";

const Stack = createNativeStackNavigator();

export default function Consultation() {
  return (
    <Stack.Navigator initialRouteName="ConsultationList">
      <Stack.Screen
        name="ConsultationList"
        component={ConsultationList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConsultationDatail"
        component={ConsultationDatail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
