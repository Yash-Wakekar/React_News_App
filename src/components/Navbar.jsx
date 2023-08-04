import { Box, HStack, Heading, VStack, Image } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Box bg="purple.500" p={2} color="white">
        <HStack>
          <Heading>DailyNews</Heading>
          <Image
            borderRadius="full"
            boxSize="55px"
            src="src\images\dailyNews_icon.png"
            alt="News Icon"
            mx={1}
          />
        </HStack>
        <HStack justifyContent="flex-start" alignItems="center" flexWrap="wrap">
          <Box _hover={{ color: "purple.200" }} mx={2}>
            {" "}
            <Link to="/">Home</Link>{" "}
          </Box>

          <Box _hover={{ color: "purple.200" }} mx={2}>
            <Link to="/business">Business</Link>
          </Box>
          <Box _hover={{ color: "purple.200" }} mx={2}>
            <Link to="/entertainment">Entertainment</Link>
          </Box>
          <Box _hover={{ color: "purple.200" }} mx={2}>
            <Link to="/health">Health</Link>
          </Box>
          <Box _hover={{ color: "purple.200" }} mx={2}>
            <Link to="/science">Science</Link>
          </Box>
          <Box _hover={{ color: "purple.200" }} mx={2}>
            <Link to="/sports">Sports</Link>
          </Box>
          <Box _hover={{ color: "purple.200" }} mx={2}>
            <Link to="/technology">Technology</Link>
          </Box>
        </HStack>
      </Box>
    </div>
  );
}
