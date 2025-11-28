import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Resume from "../Assets/Resume.pdf";
export default function Home() {
  return (
    <Container
      id="home"
      maxW={"7xl"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Stack textAlign="center" spacing={4}>
        
        {/* Hello Line */}
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight={500}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          Hello, I'm <span>👋</span>
        </Heading>

        {/* NAME (Static, Big, Not Running) */}
        <Heading
          fontSize={{ base: "3xl", sm: "5xl", lg: "6xl" }}
          fontWeight={800}
        >
          Ranjan Yadav
        </Heading>

        {/* TITLES ONE-BY-ONE */}
        <Heading
          fontSize={{ base: "lg", sm: "2xl" }}
          fontWeight={500}
          color="gray.500"
          minH="40px"
        >
          <Typewriter
            options={{
              strings: [
                "A Full Stack Developer",
                "Backend Developer",
                "Frontend Developer",
                "3+ Years of Experience",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </Heading>

        {/* BUTTONS */}
        <Flex justify="center" gap={4} mt={4}>
          <Button
            colorScheme="teal"
            size="lg"
            as="a"
            href={Resume}
            download
          >
            Resume Download
          </Button>

          <Button
            colorScheme="blue"
            size="lg"
            as="a"
            href="#contact"
          >
            Let’s Connect
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
}
