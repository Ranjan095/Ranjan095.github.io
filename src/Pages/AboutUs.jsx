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
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "./HomePage.css";
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
            <Image
              rounded={"md"}
              alt={"product image"}
              src={"https://avatars.githubusercontent.com/u/113471389?v=4"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "100%", lg: "100%" }}
            />
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
              </Heading><br/>
              
           

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
            <Heading
              id="user-detail-intro"
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              lineHeight={8}
              textAlign={"justify"}
            >
              I am a Developer who know HTML, CSS, JavaScript, ReactJS, Redux,
              Chakra, NodeJS, ExpressJS, MongoDB, Postman. Logical and
              result-driven full-stack developer dedicated to building and
              optimizing user-focused websites. Technically proficient and
              analytic problem solver with a calm and focused demeanor.
              {/* <Typewriter
                options={{
                  strings: [
                    "  I am a Developer who know HTML, CSS, JavaScript, ReactJS, Redux, Chakra,NodeJS, ExpressJS, MongoDB, Postman. Logical and result-drivenfull-stack developer dedicated to building and optimizing user-focusedwebsites. Technically proficient and analytic problem solver with a calmand focused demeanor.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 30,
                  wrapperClassName: "about",
                  cursorClassName: "cursor",
                }}
              /> */}
            </Heading>
          </Box>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
