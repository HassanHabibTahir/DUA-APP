import React, { useState } from "react";
import { Box, HStack, Input, IconButton, FlatList, Text } from "native-base";
import { KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"; // Icon library for the back arrow
import Colors from "../../../theme/colors";
import ChatHeader from "./header";

const ChatComponent: React.FC<any> = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! How are you?",
      sender: "receiver",
      timeStamp: "12:45 PM",
    },
    {
      id: "2",
      text: "I'm doing great! How about you?",
      sender: "user",
      timeStamp: "12:46 PM",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const timeStamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      id: `${Date.now()}`,
      text: inputText,
      sender: "user",
      timeStamp: timeStamp,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Box flex={1} bg="white">
        <ChatHeader navigation={navigation} />
        <FlatList
          mt={2}
          data={messages}
          renderItem={({ item }) => (
            <HStack
              justifyContent={
                item.sender === "user" ? "flex-end" : "flex-start"
              }
              mb={2}
              mx={2}
            >
              <Box
                position="relative"
                maxW="80%"
                bg={item.sender === "user" ? Colors.primary : "gray.300"}
                px={4}
                py={2}
                rounded="lg"
                shadow={2}
                borderRadius="md"
              >
                <Box
                  position="absolute"
                  top="50%"
                  right={item.sender === "user" ? "-8px" : "auto"}
                  left={item.sender === "receiver" ? "-8px" : "auto"}
                  width={0}
                  height={0}
                  borderLeftWidth={8}
                  borderRightWidth={8}
                  borderTopWidth={8}
                  borderBottomWidth={0}
                  borderLeftColor="transparent"
                  borderRightColor="transparent"
                  borderTopColor={
                    item.sender === "user" ? Colors.primary : "gray.300"
                  }
                  borderBottomColor="transparent"
                />
                <Text color={item.sender === "user" ? "white" : "black"}>
                  {item.text}
                </Text>
                <Text
                  fontSize="xs"
                  color={item.sender === "user" ? "white" : "black"}
                  alignSelf="flex-end"
                >
                  {item.timeStamp}
                </Text>
              </Box>
            </HStack>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
       <HStack
      bg="gray.100"
      p={3}
      alignItems="center"
      justifyContent="space-between"
      space={3}
    >
      <HStack
        bg="white"
        borderRadius="full"
        borderWidth={1}
        borderColor="gray.300"
        alignItems="center"
        flex={1}
        px={2}
      >
        <Input
          flex={1}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
          bg="transparent"
          borderWidth={0}
          borderColor="transparent"
          _focus={{
            bg: "transparent",
            borderColor: "transparent",
            outlineColor: "transparent",
            shadow: "none",
          }}
        />
        {/* Show voice icon when there's no input */}
        {inputText.trim() === "" ? (
          <>
            <IconButton
              icon={<Ionicons name="mic" size={24} color="gray" />}
              onPress={() => {
                // Handle voice recording logic here
              }}
              variant="unstyled"
            />
            <IconButton
              icon={<Ionicons name="camera" size={24} color="gray" />}
              onPress={() => {
                // Handle camera logic here
              }}
              variant="unstyled"
            />
          </>
        ) : (
          // Show send button when user types something
          <IconButton
            icon={<Ionicons name="send" size={24} color="blue" />}
            onPress={sendMessage}
            variant="unstyled"
          />
        )}
      </HStack>
    </HStack>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default ChatComponent;
