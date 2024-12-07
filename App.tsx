// App.tsx or RootStack.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./ui/home/home.ui";
import Tabs from "./stack/stack";
import { NativeBaseProvider } from "native-base";
import ChatComponent from "./ui/chats/chat/chat";
import ProfileScreen from "./ui/chats/profile/profile";
import customTheme from "./theme/theme";
import LoginScreen from "./ui/auth/login";
import OTPVerificationScreen from "./ui/auth/verification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={customTheme}>
        <Stack.Navigator initialRouteName="Chats">
          <Stack.Screen
            name="Chats"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* otp verificaion */}
         <Stack.Screen
         name="Otp"
         component={OTPVerificationScreen}
         options={{
           headerShown: false,
         }}
         
         />



          <Stack.Screen
            name="ChatComponent"
            component={ChatComponent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
              headerBackVisible: false,
              headerLeft: () => null,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
