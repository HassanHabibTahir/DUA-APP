import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>(); // Access navigation

  const handleGetStarted = () => {
    navigation.navigate("Tabs"); // Navigate to Tabs screen
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PcuKEBA3gMZXB67TqFYzeMj3gdufSu3J_A&s",
          }}
          style={styles.logo}
        />

        {/* Main Title */}
        <Text style={styles.title}>Welcome to</Text>
        <Text style={[styles.title, styles.brand]}>DUA BUSINESS</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Experience with the Dua Business platform
        </Text>
      </ScrollView>

      {/* Button at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>GET STARTED</Text>
            <Entypo
              name="arrow-long-right"
              size={18}
              color="white"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginTop: 100,
    paddingBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 150,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  brand: {
    color: "#12BB70",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#12BB70",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginTop: 2,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
