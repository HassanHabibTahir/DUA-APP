import React, { useState } from "react";
import { StyleSheet, Dimensions, Image, View } from "react-native";
import {
  NativeBaseProvider,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Icon,
  Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../theme/colors"; // Assuming this is where your custom colors are stored

const { width, height } = Dimensions.get("window");

export default function FullScreenLoginScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);

  const handleBackPress = () => {
    // You can navigate back here if using React Navigation, for example:
    navigation.goBack();
    // alert("Back Button Pressed");
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* Back Button */}
        <Pressable onPress={handleBackPress} style={styles.backButton}>
          <Icon
            as={<MaterialIcons name="arrow-back" />}
            size={7}
            color="white"
          />
        </Pressable>

        {/* Top Logo */}
        <Image
          source={require("../../assets/s-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Login Form */}
        <VStack space={6} width="90%" alignSelf="center">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            color="black"
          >
            Welcome Back!
          </Text>
          <Text fontSize="sm" textAlign="center" color="gray.600">
            Please log in to continue.
          </Text>

          <FormControl>
            <FormControl.Label _text={{ color: "black", fontSize: "sm" }}>
              Email
            </FormControl.Label>
            <Input
              placeholder="Enter your email"
              variant="filled"
              bg="gray.100"
              borderRadius="lg"
              color="black"
              _focus={{
                bg: "gray.200",
                borderColor: "gray.400",
              }}
              placeholderTextColor="gray.500"
            />
          </FormControl>

          <FormControl>
            <FormControl.Label _text={{ color: "black", fontSize: "sm" }}>
              Password
            </FormControl.Label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              variant="filled"
              bg="gray.100"
              borderRadius="lg"
              color="black"
              _focus={{
                bg: "gray.200",
                borderColor: "gray.400",
              }}
              placeholderTextColor="gray.500"
              InputRightElement={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={showPassword ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="3"
                    color="gray.500"
                  />
                </Pressable>
              }
            />
          </FormControl>

          <Button
            bg={Colors.button}
            _pressed={{ bg: "gray.800" }}
            borderRadius="full"
            py="3"
            _text={{ fontWeight: "bold", fontSize: "md", color: "white" }}
            onPress={() =>  navigation.navigate('Otp')}
          >
            Log In
          </Button>

          <Text
            textAlign="center"
            mt="2"
            fontSize="xs"
            color="gray.600"
            onPress={() => alert("Forgot Password Pressed")}
          >
            Forgot Password?
          </Text>

          <Text textAlign="center" mt="4" fontSize="sm" color="gray.600">
            Don't have an account?{" "}
            <Text
              color="black"
              fontWeight="bold"
              onPress={() => alert("Sign Up Pressed")}
            >
              Sign Up
            </Text>
          </Text>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: width * 0.6,
    height: height * 0.2,
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.button, // Custom background color for the back button
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
});
