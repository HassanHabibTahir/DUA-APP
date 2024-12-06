import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Spacer,
  Heading,
  FlatList,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../header/header.ui";

type RootStackParamList = {
  ContactList: undefined;
  ChatComponent: { userName: string }; 
};

type ContactListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ContactList"
>;

type Props = {
  navigation: ContactListScreenNavigationProp;
};

const ContactList: React.FC<Props> = ({ navigation }) => {
  // Generate random data
  const generateRandomData = () => {
    const names = [
      "Afreen Khan",
      "Sujita Mathur",
      "Anci Barroco",
      "Aniket Kumar",
      "Kiara",
      "Ravi Verma",
      "Priya Sharma",
      "Jaya Singh",
      "Manish Gupta",
      "Aditi Agarwal",
    ];
    const recentTexts = [
      "Good Day!",
      "Cheer up, there!",
      "I will call today.",
      "All the best",
      "Have a nice day!",
      "Let's catch up soon.",
      "Looking forward to your message.",
      "Hi, how are you?",
      "Long time no see!",
      "Hope you are doing well!",
    ];
    const avatars = [
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
      "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    ];
    const data = [];

    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomTimestamp = `${Math.floor(
        Math.random() * 12 + 1
      )}:${Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`;
      data.push({
        id: `${Date.now()}-${i}`,
        fullName: names[randomIndex],
        timeStamp: randomTimestamp,
        recentText: recentTexts[randomIndex],
        avatarUrl: avatars[randomIndex % avatars.length],
      });
    }

    return data;
  };

  const data = generateRandomData();
  return (
    <Box flex={1} safeArea>
      <Header navigation={navigation} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{ borderColor: "muted.50" }}
            borderColor="muted.200"
            pl={["3", "4"]}
            pr={["3", "5"]}
            py="2"
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChatComponent", {
                  userName: item.fullName,
                })
              }
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar size="48px" source={{ uri: item.avatarUrl }} />
                <VStack>
                  <Text
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{ color: "warmGray.50" }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </TouchableOpacity>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default ContactList;
