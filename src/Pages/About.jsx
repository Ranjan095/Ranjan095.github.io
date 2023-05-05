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
import Resume from "../Assets/Resume.pdf"

export const About = () => {
  let handleResume = () => {
    window.open("https://drive.google.com/file/d/1BSkRFvymsOMLpOmpcwrocVyl6K8e-DN4/view?usp=sharing")
  };
  return (
    <Box className='about section' padding={'6%'} id="about">
      <Heading padding={'1%'}>About Me</Heading>
      <Heading   id='user-detail-intro' as="h4" size="md" fontFamily="sans-serif" lineHeight={8} textAlign={"justify"}>
        I am a Developer who know HTML, CSS, JavaScript, ReactJS, Redux, Chakra, NodeJS, ExpressJS,
        MongoDB, Postman. Logical and result-driven full-stack developer
        dedicated to building and optimizing user-focused websites. Technically
        proficient and analytic problem solver with a calm and focused demeanor.
      </Heading>
     
     <Box>
     <Button
             id="resume-button-2"
              onClick={handleResume} variant={"solid"} colorScheme={"teal"} size={"sm"} mr={0}>
                <Link
                id="resume-link-2"
            
                  target="_blank"
                  href={Resume}
                  download={"Ranjan_Yadav_Resume"}
                >
                  Resume
                </Link>
              </Button>
     </Box>
    </Box>
  );
};
