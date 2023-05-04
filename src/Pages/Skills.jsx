/** @format */
import "./skills.css";
import {
  Image,
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Center,
  SimpleGrid,
  background,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export const Skills = () => {
  let frontendLogo = [
    {
      name: "HTML",
      src: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
    },
    {
      name: "CSS",
      src: "data:image/jpeg;base64,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",
    },
    {
      name: "JS",
      src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      name: "React",
      src: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
    },
    // {
    //   name: "Chakra",
    //   src: "data:image/png;base64,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",
    // },
    {
      name: "Redux",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png",
    },
    {
      name: "TypeScript",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAYFBMVEUxeMb///8qdcVYjM1xndRdkM8AZsD9/f/3+fwdcMPt8vnz9/sjcsQ+f8i+0OlKhcvV4PGSsd2EqNnL2e4AasHi6vWZtt+3yudpl9I5fMioweOLrdt5otaguuAAY7+vxeX6tRDuAAADVElEQVRoge2b24KjIAyGI2rbSBSPra3t9P3fcnW6MyseWkSUveC/bJGPQIgEBLyXeJIL2EkiT/hfLLzgGSDtRQcghIz/w6cx7sd+CeP0B18g25sOwLB44dPdTX8J0w7PYwu2d2Ixb/GZJeNb8zMPuC14Jw6JNeNb8xPId5zvQ1EOu8W6KVmFOzk5OTk5OTk5OTk5OTk5OTk5OTk5Of03YoyIEJGIaZwYsQUaPUzIYhEGTXbOsjwIRQxIi9rA/AW6Dthwv6SR1xOvirNPCw5PmLdAYc8yKu/FdCl+UT+3o5M6/eT/Vsswj+YLhhvj6XU8awlP9funtsVj8KHgpnjmH23i8Y3TbY/Hx8eCm+KHXc/TW9Y02SOpfupahD9KkmqW//rGUyPDqzuWXcBvw35J9S1ahofy0NeXkDrxS/rz0NVKcqy7ffVRDA9+sggvi4X9uoOpaiTHS8pRDSiq7fBM9IenF4Z7ReA6/tEU3pcGXpejja/t4qUC+k6mi5c63ytGrrctHmI5MtyMfpaiMPEqCe8lJj9E+4zHRMZ7PC+NNeAzXnb9b1U5GhoChc6fet9WWWzkkzgFPOVjvOdFTxMNUMBDObPMvIhybQNU8CPn/1UhVoYBJTwTs8utJ6yaBWrWk5iz36vqNZNADQ+MZhKsVs0KviK+9b+cz/HP+g6gjAeix1wD9O1Xx7fx5/qYcYGpNZBxfNeA+2QMSHXdfxm+y/LD4StI7UEz+PaJEp4jfKE5+svx3dL6OpyGXOiZr4PvGtAMcrX7nvjWCQcbDmc959PFA8qv4Yve4GvjAaUYoLkCVlluTD9Jt13w8UxIJWnXYZx6msJ7z8ltS3kFrLn8V8CfvCg4jP5gIKUfzVYTL+5mWBqU8sKS5AXYUTP3U8S3q5pzyNomfItKGGyxVpvF/PgnvhyrJKtFqzC/DF+8upnfAvwbnTRDviG8dtprBK878mbwR92uN4LnoX6msXh3Y9zzYkWe8xl/fXuOwZtVaabKGy8o5hb41WNdigfMP0W/4vWkJYQieFaR7APHqLrVMDnhzN/MIcSrHzSPZ1K0utzO9zDG6e0FsdGlqO7wFLFshTh/fkq57Sthli/EWb4OaPsypOWroLYvwtq+Bmz7ErRn7Qr4H4//K0QVI2B+AAAAAElFTkSuQmCC",
    },
    {
      name: "Github",
      src: "https://cdn-icons-png.flaticon.com/128/1051/1051326.png",
    },
    {
      name: "NodeJs",
      src: "https://nodejs.org/static/images/logo.svg",
    },
    {
      name: "ExpressJs",
      src: "https://www.liblogo.com/img-logo/ex124e081-express-logo-express-fashion-stores-logo-png-transparent-amp-svg-vector-freebie.png",
    },
    {
      name: "MongoDb",
      src: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
    },
  ];

  return (
    <Box padding={'6%'} textAlign={'center'} id="skills">
      <Heading>TECH SKILLS</Heading>
      <SimpleGrid
        columns={{ base: 3, md: 3, lg: 4, xl: 5 }}
        spacing="40px"
        marginTop={"20px"}
      >
        {frontendLogo.map((ele) => {
          return (
            <Box key={Math.random()} className="tec-stack skills-card">
              <Center width={"100%"} height={"100%"}>
                <Image className="skillImage skills-card-img" src={ele.src} alt="tecStack Logo" />
              </Center>
              <Box>
                <Text className="skills-card-name" fontWeight="bold" fontSize="md">
                  {ele.name}
                </Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
