import React, { useState } from "react";
import { Box, HStack, VStack, Input, Button, FlatList, Text, Spacer } from "native-base";
import { KeyboardAvoidingView, Platform } from "react-native"; // For handling keyboard behavior

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    // Initial random messages
    { id: "1", text: "Hello! How are you?", sender: "receiver", timeStamp: "12:45 PM" },
    { id: "2", text: "I'm doing great! How about you?", sender: "user", timeStamp: "12:46 PM" }
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    // Get the current time for the message
    const timeStamp = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const newMessage = {
      id: `${Date.now()}`,
      text: inputText,
      sender: messages.length % 2 === 0 ? "user" : "receiver", // Alternating sender
      timeStamp: timeStamp,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText(""); // Clear input field
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Box flex={1} bg="white">
        {/* Chat Messages */}
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <HStack
              justifyContent={item.sender === "user" ? "flex-end" : "flex-start"}
              mb={2}
              mx={2}
            >
              <Box
                bg={item.sender === "user" ? "blue.500" : "gray.300"}
                px={4}
                py={2}
                rounded="md"
                maxW="80%"
              >
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
          contentContainerStyle={{ paddingBottom: 100 }} // Ensure padding for the input field
        />

        {/* Input Box */}
        <HStack
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="gray.100"
          p={3}
          space={2}
          alignItems="center"
        >
          <Input
            flex={1}
            placeholder="Type a message..."
            value={inputText}
            onChangeText={setInputText}
            bg="white"
            borderWidth={1}
            borderColor="gray.300"
            borderRadius="full"
            px={4}
            onFocus={() => {}} // Ensures the keyboard opens
          />
          <Button onPress={sendMessage} rounded="full" colorScheme="blue">
            Send
          </Button>
        </HStack>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default ChatComponent;
