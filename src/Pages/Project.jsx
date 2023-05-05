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
      name: "Travel At Ease",
      tecStack: "HTML | CSS | JS | REACT | REDUX | CHAKRA" ,
      discription:
        "Travel At Ease is an online booking platform,where we can book different services just as hotels, flights, and car. No matter who you are or where you’re going, you deserve to travel freely. Orbitz has advocated for safe, inclusive travel for more than 20 years",
      site: "https://travelatease.netlify.app/",
      gitHub: "https://github.com/AkshayKumarGaurav/paltry-rain-9292",
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
        "Orbitz is an online booking platform,where we can book different services just as hotels, flights, and car. No matter who you are or where you’re going, you deserve to travel freely. Orbitz has advocated for safe, inclusive travel for more than 20 years",
      site: "https://travelatease.netlify.app/",
      gitHub: "https://github.com/AkshayKumarGaurav/paltry-rain-9292",
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
  ];

  return (
    <Box padding={'6%'} id="projects">
      <Box textAlign={"center"} >
        <img></img>
        <Heading>My Projects</Heading>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 2 }} marginTop={"3%"}>
        {myProject?.map((el) => {
          return (
            <Box className="proBox project-card" key={Math.random()}>
              <Link target={"_blank"} href={el.site}>
                <Image className="proImage project-card" src={el.image}></Image>
              </Link>

              <Box>
                {" "}
                <Heading className="project-title">{el.name}</Heading>
                <Heading className="project-tech-stack" as="h4" size="md">
                  Tech Stack: {el.tecStack}
                </Heading>
              </Box>
            <Box>
          <Flex>
          <Box width={'70%'}></Box>
            <Box  alignItems={'flex-end'} margin={"4%"}>
                <Flex>
                  <Link className="project-github-link" href={el.gitHub} target={"_blank"}>
                    <Image
                  
                      width={"30%"}
                      src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                    ></Image>
                  </Link>
                  <Link className="project-deployed-link" href={el.site} target={"_blank"}>
                    <Heading as="h3" size="md">
                      Site
                    </Heading>
                  </Link>
                </Flex>
              </Box>
          </Flex>

            </Box>

              <UnorderedList>
                <ListItem className="project-description" fontSize={"lg"}>{el.discription}</ListItem>
              </UnorderedList>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
