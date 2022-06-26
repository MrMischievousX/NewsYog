// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Maps from "./screens/Maps";
import News from "./screens/News";
import Onboarding from "./screens/Onboarding";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
}

export default App;
