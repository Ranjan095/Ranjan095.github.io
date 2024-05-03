/** @format */

"use client";

import {
  Box,
  Container,
  Stack,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "./HomePage.css";
import { motion, spring } from "framer-motion";

export default function AboutUs() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      marginTop={{ base: "20%", sm: "10%", md: "0%", lg: "0%", xl: "0%" }}
      id="about"
      maxW={"7xl"}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box>
            <motion.div
              // initial={{ y: -500 }}
              // animate={{ y: 0 }}
              // transition={{ delay: 0.5, duration: 2, type: "tween" }}
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 2, delay: 0.6 }}
            >
              <Image
                rounded={"md"}
                alt={"product image"}
                src={"https://avatars.githubusercontent.com/u/113471389?v=4"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "100%", lg: "100%" }}
              />
            </motion.div>
          </Box>
        </Flex>
        <Stack>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              display={"inline-block"}
            >
              Hello,
            </Heading>
            <br />

            <br />
            <Flex gap={"10px"} align={"center"}>
              <Heading
                size={{
                  base: "md",
                  md: "lg",
                }}
                fontWeight={"medium"}
              >
                My name is{" "}
              </Heading>
              <Typewriter
                options={{
                  strings: ["Ranjan Yadav"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: colorMode === "light" ? "light" : "dark",
                  cursorClassName: "cursor",
                }}
              />
            </Flex>
            <Flex gap={"10px"} align={"center"}>
              <Heading
                size={{
                  base: "md",
                  md: "lg",
                }}
                fontWeight={"medium"}
              >
                I'm a{" "}
              </Heading>
              <Typewriter
                options={{
                  strings: ["Full-Stack Developer", "MERN-Stack Developer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: colorMode === "light" ? "light" : "dark",
                  cursorClassName: "cursor",
                }}
              />
            </Flex>
            <br />
            <hr></hr>
            <br />
            <motion.div
              // initial={{ y: 500 }}
              // animate={{ y: 0 }}
              // transition={{type: "tween",duration: 2,delay: 0.5 }}

              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", duration: 2, delay: 1 }}
            >
              {" "}
              <Text
                id="user-detail-intro"
                as="h5"
                // size="sm"
                fontFamily="sans-serif"
                lineHeight={7}
                textAlign={"justify"}
              >
                Dynamic Full Stack Web Developer with tech experience in MERN
                Stack technologies. Proficient in building both solo and
                collaborative projects, demonstrating strong technical expertise
                and effective teamwork. Skilled in creating scalable and
                user-friendly web applications for optimal user experience.
              </Text>
            </motion.div>
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
