/** @format */

"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
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
  Link,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  DownloadIcon,
} from "@chakra-ui/icons";
import ColorModeToggle from "../Assets/ColorModeToggle";
import Resume from "../Assets/Resume.pdf";
const Links = ["Home","About", "Skills", "Project","GitHub", "Contact"];
let handleResume = () => {
  window.open(
    "https://drive.google.com/file/d/1tbwBLvBbxT4fWaYldl0_UbFm4ms2er4b/view?usp=sharing"
  );
};
const NavLink = (props) => {
  let ids = {
    Home: "#home",
    About: "#about",
    Skills: "#skills",
    Project: "#projects",
    GitHub: "#github",
    Contact: "#contact",
  };
  const { children } = props;

  return (
    <Box
      className={`nav-link ${ids[children].split("#")[1]}`}
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      fontWeight={"bold"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.400", "gray.700"),
      }}
      // href={children}
    >
      <Link href={ids[children]}>{children}</Link>
    </Box>
  );
};

export default function NavBar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  let handleClick = () => {
    onClose();
  };
  return (
    <>
      <Box
        style={{
          position: "fixed",
          zIndex: 1000,
          overflow: "hidden",
          top: "0%",
          width: "100%",
        }}
        bg={useColorModeValue("gray.400", "gray.700")}
        // color='white'
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={"center"}> */}
          {/* <Box>Logo</Box> */}
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          {/* </HStack> */}
          <Flex alignItems={"center"}>
            <ColorModeToggle />
            <Button
              onClick={handleResume}
              variant={"solid"}
              // colorScheme={"teal"}
              bg={"#0D74FF"}
              size={"sm"}
              mr={4}
              rightIcon={<DownloadIcon />}
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
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box onClick={handleClick}>
                  <NavLink key={link}>{link}</NavLink>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
