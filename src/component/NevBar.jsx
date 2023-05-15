/** @format */

import React from "react";
import { ReactNode } from "react";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  ScaleFade,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

import Resume from "../Assets/Resume.pdf";
import ColorModeToggle from "../Assets/ColorModeToggle";

export const NevBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const mainDiv = {
    position: "fixed",
    zIndex: 1000,
    overflow: "hidden",
    top: "0%",
    width: "100%",
    backgroundColor: colorMode === "dark" ? "white" : "black",
    color: colorMode == "dark" ? "black" : "white",
  };

  let handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1BSkRFvymsOMLpOmpcwrocVyl6K8e-DN4/view?usp=sharing"
    );
  };

  let ids = {
    HOME: "#home",
    ABOUT: "#about",
    SKILLS: "#skills",
    PROJECT: "#projects",
    CONTACT: "#contact",
  };
  const Links = ["HOME", "ABOUT", "SKILLS", "PROJECT", "CONTACT"];
  const NavLink = ({ children }) => (
    <Box className={`nav-link ${ids[children].split("#")[1]}`}>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        fontWeight={"bold"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("teal.300", "gray.100"),
        }}
        href={ids[children]}
      >
        {children}
      </Link>
    </Box>
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="nav-menu" style={mainDiv}>
      {/* <> */}
      <Box
        id="nav-menu"
        // bg={useColorModeValue("gray.100", "gray.900")}
        // color={"black"}
        px={4}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "center", md: "space-around" }}
          gap={"5%"}
        >
          <IconButton
            color={"black"}
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={"center"}>
            {/* <Box>
              <Heading color={'teal'}>Ranjan Yadav</Heading>
            </Box> */}
            <Box
              width={"100%"}
              // border={"1px solid red"}
            >
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                // color={"black"}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </Box>
          </HStack>
          <Box marginRight={"3%"}>
            <Flex alignItems={"center"} gap={"5%"}>
              <ColorModeToggle />
              <Button
                id="resume-button-1"
                className="nav-link resume"
                onClick={handleResume}
                variant={"solid"}
                colorScheme="blue"
                size={"sm"}
                mr={0}
              >
                <Link
                  id="resume-link-1"
                  target="_blank"
                  href={Resume}
                  download={"Ranjan_Yadav_Resume"}
                >
                  Resume
                </Link>
              </Button>
            </Flex>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
      {/* </> */}
    </div>
  );
};
