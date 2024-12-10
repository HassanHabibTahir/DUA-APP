import { Box, HStack, Icon, IconButton, Image, Text } from "native-base";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../../theme/colors";

const ChatHeader: React.FC<any> = ({ navigation }) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      shadow={2}
      bg={Colors.primary}
      px={4}
      pt={5}
      borderBottomLeftRadius={2}
      borderBottomRightRadius={2}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <HStack>
          <IconButton
            icon={<Ionicons name="arrow-back" size={24} color="white" />}
            onPress={() => navigation.goBack()} 
            variant="unstyled"
          />
          <Box mr={1} flexDirection="row" alignItems="center">
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
              }}
              style={{ width: 30, height: 30, borderRadius: 50 }}
            />
            <Box ml={2}>
              <Text color="white" fontWeight="bold" fontSize={14}>
                User Name
              </Text>
            </Box>
          </Box>
        </HStack>
      </HStack>
      <HStack alignItems={"center"}>
        <IconButton
          icon={<Icon as={FontAwesome} name="video-camera" size={6} />}
          borderRadius="full"
          _icon={{ color: "white", size: "sm" }}
        />
        <IconButton
          icon={<Icon as={Ionicons} name="call" />}
          borderRadius="full"
          _icon={{ color: "white", size: "lg" }}
        />
      </HStack>
    </HStack>
  );
};

export default ChatHeader;
