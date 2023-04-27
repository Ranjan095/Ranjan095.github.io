/** @format */

import React from "react";
import {
  Link,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const About = () => {
  return (
    <Box padding={'6%'} id="about">
      <Heading padding={'1%'}>About Me</Heading>
      <Heading as="h4" size="md" fontFamily='cursive'>
        I am a Developer who know HTML, CSS, JAVASCRIPT,REACT,REDUX,CHAKRA, NODEJS, EXPRESS.JS,
        MONGODB, POSTMAN. Logical and result-driven full-stack developer
        dedicated to building and optimizing user-focused websites. Technically
        proficient and analytic problem solver with a calm and focused demeanor.
      </Heading>
     
      <Button marginTop={"10px"} variant={"solid"} colorScheme={"teal"} size={"sm"} mr={2}>
              Resume
            </Button>
    </Box>
  );
};
