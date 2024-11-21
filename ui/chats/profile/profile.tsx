import React from "react";
import { Box, VStack, HStack, Text, Avatar, Button, Spacer, Divider } from "native-base";

const ProfileScreen = () => {
  return (
    <Box flex={1} bg="white" p={4}>
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
          Web Developer | React Native Enthusiast
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
            A passionate developer who loves to build apps with React Native and NativeBase. Always eager to learn new technologies and explore the world of mobile development.
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
      <Button colorScheme="blue" size="lg" w="full" mt={4}>
        Edit Profile
      </Button>
    </Box>
  );
};

export default ProfileScreen;
