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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { transform } from "framer-motion";
import { scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";

import Resume from "../Assets/Resume.pdf"

export const NevBar = () => {
  let handleResume = () => {
    window.open("https://drive.google.com/file/d/1BSkRFvymsOMLpOmpcwrocVyl6K8e-DN4/view?usp=sharing")
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
      className={`nav-link ${(ids[children].split("#")[1])}`}
      // className="ranjan"
    >
      {children}
    </Link>
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
    id="nav-menu"
      style={{
        position: "fixed",
        zIndex:'100',
        overflow: "hidden",
        top: "0%",
        width: "100%",
      }}
    >
      {/* <> */}
      <Box
      
        bg={useColorModeValue("gray.100", "gray.900")}
        color={"black"}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"} gap={"15%"}>
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
              color={"black"}
              
             
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            </Box>
          </HStack>
          <Box  marginRight={"3%"}>
            <Flex alignItems={"center"}>
              <Button
              id='resume-button-1'
              className='nav-link resume'
              onClick={handleResume} variant={"solid"} colorScheme={"teal"} size={"sm"} mr={0}>
                <Link
                 id='resume-link-1'
                  target="_blank"
                  href={Resume}
                  download={"Ranjan_Yadav_Resume"}
                >
                  Resume
                </Link>
              </Button>

              <Button variant={"solid"} size={"sm"} mr={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjyMub5re7ZkmcZ3sa85cCuWT5k1wZ2JICA&usqp=CAU"
                  }
                />
              </Button>
              <Button variant={"solid"} size={"sm"} mr={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  }
                />
              </Button>
              <Button variant={"solid"} size={"sm"} mr={0}>
                <Avatar
                  size={"sm"}
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ9BLaQr8gi24WdvoAcllLM31YXU-35ip4A&usqp=CAU"
                  }
                />
              </Button>

              {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
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
