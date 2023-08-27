/** @format */

"use client";

import {
  Container,
  Flex,
  Link,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import "./contact2.css";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../Assets/url";
let obj = {
  name: "",
  email: "",
  message: "",
};

export default function Contact2() {
  let [feedback, setFeedback] = useState(obj);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  const toast = useToast();

  let handleChange = (e) => {
    let { name, value } = e.target;
    let newData = { ...feedback, [name]: value };
    setFeedback(newData);
    // console.log(feedback);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(feedback);
    setLoading(true);
    axios
      .post(`${BASE_URL}/portfolioFeedback/message/create`, feedback)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast({
          position: "top",
          title: `Thanks ${feedback.name}`,
          description: `I'll be in touch with you soon.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFeedback(obj);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setError(true);
        toast({
          position: "top",
          title: `oops`,
          description: `Somthing went wrong`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Container id="contact" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          className="cont"
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Lets Keep In Touch
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-7079062877
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        iranjan095@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Bangalore, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Link
                      href="https://www.linkedin.com/in/ranjan-yadav-65800122b/"
                      target="_blank"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </Link>
                    <Link href="https://github.com/Ranjan095" target="_blank">
                      {" "}
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>

                    {/* <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="28px" />}
                    /> */}
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <Flex>
                            <FormLabel>Your Name</FormLabel>
                            <FormLabel color={"red"}>*</FormLabel>
                          </Flex>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input
                              name="name"
                              value={feedback.name}
                              onChange={handleChange}
                              type="text"
                              size="md"
                              required
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <Flex>
                            <FormLabel>Mail</FormLabel>
                            <FormLabel color={"red"}>*</FormLabel>
                          </Flex>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              name="email"
                              value={feedback.email}
                              onChange={handleChange}
                              type="email"
                              size="md"
                              required
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <Flex>
                            <FormLabel>Message</FormLabel>
                            <FormLabel color={"red"}>*</FormLabel>
                          </Flex>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            name="message"
                            value={feedback.message}
                            onChange={handleChange}
                            required
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            loadingText="Submitting"
                            colorScheme="green"
                            isLoading={loading ? true : false}
                            type="submit"
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
