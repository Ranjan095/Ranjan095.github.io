/** @format */

"use client";

import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import { ViewIcon } from "@chakra-ui/icons";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading size={{ base: "md", sm: "lg", lg: "lg" }}>
          Thanks for visiting <ViewIcon />
        </Heading>
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"#about"}>
            About
          </Box>
          <Box as="a" href={"#skills"}>
            Skills
          </Box>
          <Box as="a" href={"#projects"}>
            Project
          </Box>
          <Box as="a" href={"#contact"}>
            Contact
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack>
            <Flex gap={"3px"}>
              <Link
                _hover={{ textDecoration: "none" }}
                href="https://ranjanyadav.netlify.app/portfolioMsg"
                target="_blank"
              >
                <Text>©</Text>
              </Link>
              <Text>2023 Ranjan Yadav. All rights reserved</Text>
            </Flex>
          </Stack>

          <Stack direction={"row"} spacing={6}>
            <Link href="https://twitter.com/iranjan96/" target="_blank">
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ranjan-yadav-65800122b/"}
              target="_blank"
            >
              <SocialButton label={"Linkdin"}>
                <FaLinkedin />
              </SocialButton>
            </Link>
            <Link href="https://github.com/Ranjan095" target="_blank">
              <SocialButton label={"GitHub"}>
                <FaGithub />
              </SocialButton>
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
