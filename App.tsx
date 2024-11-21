// App.tsx or RootStack.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./ui/home/home.ui";
import Tabs from "./stack/stack";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Tabs" component={Tabs}   options={{
             headerShown: true, 
             headerBackVisible: true, 
             headerLeft: () => null, 
          }} />
      </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
