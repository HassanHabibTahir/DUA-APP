// Tabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContactList from "../ui/chats/contact-list/contactList";
import ChatComponent from "../ui/chats/chat/chat";
import ProfileScreen from "../ui/chats/profile/profile";

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Screen 1
function HomeTabScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Tab</Text>
    </View>
  );
}

// Screen 2
function ProfileTabScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Tab</Text>
    </View>
  );
}

// Screen 3
function SettingsTabScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Tab</Text>
    </View>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#12BB70", // Active tab color
        tabBarInactiveTintColor: "#888", // Inactive tab color
        headerShown: false, // Hide header
      }}
    >
      {/* Define your tabs */}
      <Tab.Screen
        name="Home"
        component={ContactList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={ChatComponent}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen }
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
