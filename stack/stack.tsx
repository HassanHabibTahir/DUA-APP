import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContactList from "../ui/chats/contact-list/contactList";
import ChatComponent from "../ui/chats/chat/chat";
import ProfileScreen from "../ui/chats/profile/profile";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../theme/colors";

// Create a Tab Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Screen 2
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen Tab</Text>
    </View>
  );
}

// Screen 3
function BusinessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Business Screen Tab</Text>
    </View>
  );
}

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactList"
        component={ContactList}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Business"
        component={BusinessScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business" size={size} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
