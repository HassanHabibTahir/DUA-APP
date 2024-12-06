import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Button,
  Spacer,
  Divider,
  IconButton,
  Icon,
  View,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../theme/colors";
import { StyleSheet, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} bg="white">
      {/* Header with Back Arrow */}
      <HStack
        bg={Colors?.primary}
        p={4}
        alignItems="center"
        space={2}
        borderBottomLeftRadius={2}
        borderBottomRightRadius={2}
      >
        <IconButton
          icon={<Icon as={Ionicons} name="arrow-back" />}
          borderRadius="full"
          _icon={{ color: "white", size: "lg" }}
          onPress={() => navigation.goBack()} // Navigate back
        />
        <Text fontSize="lg" fontWeight="bold" color="white">
          Profile
        </Text>
      </HStack>

      {/* Profile Content */}
      <Box flex={1} p={4}>
        {/* Profile Header */}
        <VStack alignItems="center" space={4}>
          <Avatar
            size="xl"
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
          />
          <Text fontSize="2xl" fontWeight="bold">
            Afreen Khan
          </Text>
          <Text color="gray.500" fontSize="md">
            Web Developer | Blockchain Enthusiast
          </Text>
        </VStack>

        <Spacer />

        {/* Profile Details */}
        <VStack space={4} mt={4}>
          <Box p={4} bg="gray.50" borderRadius="md">
            <Text fontWeight="bold" color="gray.600">
              Bio
            </Text>
            <Text color="gray.700">
              A passionate developer who loves to build apps with React Native
              and NativeBase. Always eager to learn new technologies and explore
              the world of mobile development.
            </Text>
          </Box>

          {/* Contact Info */}
          <Box p={4} bg="gray.50" borderRadius="md">
            <Text fontWeight="bold" color="gray.600">
              Contact Information
            </Text>
            <Text color="gray.700">Email: afreen@example.com</Text>
            <Text color="gray.700">Phone: +123 456 7890</Text>
          </Box>

          {/* Social Media Links */}
          <Box p={4} bg="gray.50" borderRadius="md">
            <Text fontWeight="bold" color="gray.600">
              Social Media
            </Text>
            <HStack space={4} mt={2}>
              <Button colorScheme="twitter" variant="outline">
                Twitter
              </Button>
              <Button colorScheme="facebook" variant="outline">
                Facebook
              </Button>
              <Button colorScheme="linkedin" variant="outline">
                LinkedIn
              </Button>
            </HStack>
          </Box>
        </VStack>

        <Spacer />

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.button} >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          
          </View>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};








const styles = StyleSheet.create({
  
  button: {
    backgroundColor: Colors.button,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor:Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});





export default ProfileScreen;
