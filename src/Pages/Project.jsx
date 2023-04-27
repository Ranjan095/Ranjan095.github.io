/** @format */

import React from "react";
import "./project.css";
import orbitz from "../image/orbitz.png";
import KFC from "../image/KFC.png";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const Project = () => {
  const myProject = [
    {
      image: orbitz,
      name: "Orbitz",
      tecStack: "HTML | CSS | JS | REACT | REDUX | CHAKRA" ,
      discription:
        "KPC is an online non-veg food website where user can buy different kinds of chicken dishes and get delivered at the door-step within 24hrs.",
      site: "https://kpc.netlify.app/",
      gitHub: "https://github.com/rajeshuser/tall-question-6900",
    },
    {
      image: KFC,
      name: "KPC",
      tecStack: "HTML | CSS | JS",
      discription:
        "KPC is an online non-veg food website where user can buy different kinds of chicken dishes and get delivered at the door-step within 24hrs.",
      site: "https://kpc.netlify.app/",
      gitHub: "https://github.com/rajeshuser/tall-question-6900",
    },
    {
      image: orbitz,
      name: "Orbitz",
      tecStack: "HTML | CSS | JS | REACT | REDUX | CHAKRA" ,
      discription:
        "KPC is an online non-veg food website where user can buy different kinds of chicken dishes and get delivered at the door-step within 24hrs.",
      site: "https://kpc.netlify.app/",
      gitHub: "https://github.com/rajeshuser/tall-question-6900",
    },
    {
      image: KFC,
      name: "KPC",
      tecStack: "HTML | CSS | JS",
      discription:
        "KPC is an online non-veg food website where user can buy different kinds of chicken dishes and get delivered at the door-step within 24hrs.",
      site: "https://kpc.netlify.app/",
      gitHub: "https://github.com/rajeshuser/tall-question-6900",
    }
  ];

  return (
    <Box padding={'6%'} id="project">
      <Box textAlign={"center"} >
        <Heading>My Projects</Heading>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 2 }} marginTop={"3%"}>
        {myProject?.map((el) => {
          return (
            <Box className="proBox" key={Math.random()}>
              <Link target={"_blank"} href={el.site}>
                <Image className="proImage" src={el.image}></Image>
              </Link>

              <Box>
                {" "}
                <Heading>{el.name}</Heading>
                <Heading as="h4" size="md">
                  Tech Stack: {el.tecStack}
                </Heading>
              </Box>
            <Box>
          <Flex>
          <Box width={'70%'}></Box>
            <Box  alignItems={'flex-end'} margin={"4%"}>
                <Flex>
                  <Link href={el.gitHub} target={"_blank"}>
                    <Image
                  
                      width={"30%"}
                      src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                    ></Image>
                  </Link>
                  <Link href={el.site} target={"_blank"}>
                    <Heading as="h3" size="md">
                      Site
                    </Heading>
                  </Link>
                </Flex>
              </Box>
          </Flex>

            </Box>

              <UnorderedList>
                <ListItem fontSize={"lg"}>{el.discription}</ListItem>
              </UnorderedList>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
