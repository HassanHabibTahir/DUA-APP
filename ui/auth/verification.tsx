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
  HStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../theme/colors";

const { width, height } = Dimensions.get("window");

export default function OTPVerificationScreen({ navigation }: any) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleInputChange = (text: string, index: number) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Pressable onPress={handleBackPress} style={styles.backButton}>
          <Icon
            as={<MaterialIcons name="arrow-back" />}
            size={7}
            color="white"
          />
        </Pressable>
        <Image
          source={require("../../assets/s-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <VStack space={6} width="90%" alignSelf="center">
          <Text
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            color="black"
          >
            Verify Your Account
          </Text>
          <Text fontSize="sm" textAlign="center" color="gray.600">
            Enter the OTP sent to your email to verify your account....
          </Text>
          <HStack space={3} justifyContent="center">
            {otp.map((digit, index) => (
              <FormControl key={index} width="12%" isRequired>
                <Input
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleInputChange(text, index)}
                  keyboardType="number-pad"
                  variant="filled"
                  bg="gray.100"
                  borderRadius="lg"
                  color="black"
                  _focus={{
                    bg: "gray.200",
                    borderColor: "gray.400",
                  }}
                  placeholderTextColor="gray.500"
                  textAlign="center"
                  fontSize="lg"
                />
              </FormControl>
            ))}
          </HStack>
          <Text
            textAlign="center"
            fontSize="sm"
            color="gray.600"
            onPress={() => alert("Resend OTP Pressed")}
          >
            Didn't receive the code?{" "}
            <Text color="blue.600" fontWeight="bold">
              Resend OTP
            </Text>
          </Text>

          <Button
            bg={Colors.button}
            _pressed={{ bg: "gray.800" }}
            borderRadius="full"
            py="3"
            _text={{ fontWeight: "bold", fontSize: "md", color: "white" }}
            onPress={() => navigation.navigate("Tabs")}
          >
            Verify OTP
          </Button>
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
    backgroundColor: Colors.button,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
