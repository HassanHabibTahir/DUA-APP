import React, { useState, useEffect } from "react";
import { Box, HStack, Icon, IconButton, Menu, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Animated } from "react-native";
import Colors from "../../theme/colors";

const Header: React.FC<any> = ({ navigation }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(0));
  const [isFullHeaderVisible, setIsFullHeaderVisible] = useState(true);

  const handleSearchPress = () => {
    setIsSearchVisible(true);
    setIsFullHeaderVisible(false);
  };

  const handleBackPress = () => {
    setIsSearchVisible(false);
    setIsFullHeaderVisible(true);
  };

  useEffect(() => {
    if (isSearchVisible) {
      Animated.spring(slideAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isSearchVisible]);

  return (
    <Box
      bg={Colors.primary}
      px={4}
      pt={1}
      borderBottomLeftRadius={2}
      borderBottomRightRadius={2}
    >
      <HStack alignItems="center" justifyContent="space-between">
        {isSearchVisible ? (
          <IconButton
            icon={<Icon as={Ionicons} name="arrow-back-outline" />}
            borderRadius="full"
            _icon={{ color: "white", size: "lg" }}
            onPress={handleBackPress}
          />
        ) : (
          <>
            <IconButton
              icon={<Icon as={Ionicons} name="arrow-back-outline" />}
              borderRadius="full"
              _icon={{ color: "white", size: "lg" }}
              onPress={() => navigation.goBack()}
            />
            <HStack alignItems={"center"}>
              <IconButton
                icon={<Icon as={Ionicons} name="camera" />}
                borderRadius="full"
                _icon={{ color: "white", size: "lg" }}
              />
              <IconButton
                icon={<Icon as={Ionicons} name="search" />}
                borderRadius="full"
                _icon={{ color: "white", size: "lg" }}
                onPress={handleSearchPress}
              />

              <Menu
                shadow={2}
                w="190"
                trigger={(triggerProps) => {
                  return (
                    <Pressable
                      accessibilityLabel="More options menu"
                      {...triggerProps}
                    >
                      <Icon
                        as={Ionicons}
                        name="ellipsis-vertical"
                        size="lg"
                        color="white"
                      />
                    </Pressable>
                  );
                }}
              >
                <Menu.Item onPress={() => navigation.navigate("Profile")}>
                  <HStack space={2} alignItems="center">
                    <Icon as={Ionicons} name="person-outline" size="sm" />
                    <Box>Profile</Box>
                  </HStack>
                </Menu.Item>
                <Menu.Item>
                  <HStack space={2} alignItems="center">
                    <Icon as={Ionicons} name="settings-outline" size="sm" />
                    <Box>Settings</Box>
                  </HStack>
                </Menu.Item>
                <Menu.Item>
                  <HStack space={2} alignItems="center">
                    <Icon as={Ionicons} name="log-out-outline" size="sm" />
                    <Box>Log Out</Box>
                  </HStack>
                </Menu.Item>
              </Menu>
            </HStack>
          </>
        )}

        {isSearchVisible && (
          <Animated.View
            style={{
              flexDirection: "row",
              transform: [
                {
                  translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            }}
          >
            <Input
              placeholder="Search..."
              bg="white"
              borderRadius="full"
              px={4}
              flex={1}
              InputRightElement={
                <Icon
                  as={Ionicons}
                  name="search"
                  size={5}
                  mr={2}
                  color="gray.500"
                />
              }
            />
          </Animated.View>
        )}
      </HStack>
    </Box>
  );
};

export default Header;
