/** @format */
import {
  Image,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Grid,
  GridItem,
  Text,
  Center,
  SimpleGrid,
  background,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import "./skills.css";
import Typewriter from "typewriter-effect";
import redux from "../image/tekStack/redux.png";
import Css from "../image/tekStack/Css.png";
import Express from "../image/tekStack/Express.png";
import NodeJS from "../image/tekStack/NodeJS.png";
import MongoDB from "../image/tekStack/MongoDB.webp";
import Git from "../image/tekStack/Git.png";
import Postman from "../image/tekStack/PostMan.png";
import Thunder from "../image/tekStack/Thunder.png";
import { motion, spring } from "framer-motion";
let tecStack = [
  {
    name: "HTML",
    category: "frontend",
    src: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
  },
  {
    name: "CSS",
    category: "frontend",
    src: Css,
  },
  {
    name: "JS",
    category: "frontend",
    src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "React",
    category: "frontend",
    src: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
  },
  {
    name: "Chakra_ui",
    category: "frontend",
    src: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
  },
  {
    name: "Redux",
    category: "frontend",
    src: redux,
  },
  {
    name: "TypeScript",
    category: "frontend",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAYFBMVEUxeMb///8qdcVYjM1xndRdkM8AZsD9/f/3+fwdcMPt8vnz9/sjcsQ+f8i+0OlKhcvV4PGSsd2EqNnL2e4AasHi6vWZtt+3yudpl9I5fMioweOLrdt5otaguuAAY7+vxeX6tRDuAAADVElEQVRoge2b24KjIAyGI2rbSBSPra3t9P3fcnW6MyseWkSUveC/bJGPQIgEBLyXeJIL2EkiT/hfLLzgGSDtRQcghIz/w6cx7sd+CeP0B18g25sOwLB44dPdTX8J0w7PYwu2d2Ixb/GZJeNb8zMPuC14Jw6JNeNb8xPId5zvQ1EOu8W6KVmFOzk5OTk5OTk5OTk5OTk5OTk5OTk5Of03YoyIEJGIaZwYsQUaPUzIYhEGTXbOsjwIRQxIi9rA/AW6Dthwv6SR1xOvirNPCw5PmLdAYc8yKu/FdCl+UT+3o5M6/eT/Vsswj+YLhhvj6XU8awlP9funtsVj8KHgpnjmH23i8Y3TbY/Hx8eCm+KHXc/TW9Y02SOpfupahD9KkmqW//rGUyPDqzuWXcBvw35J9S1ahofy0NeXkDrxS/rz0NVKcqy7ffVRDA9+sggvi4X9uoOpaiTHS8pRDSiq7fBM9IenF4Z7ReA6/tEU3pcGXpejja/t4qUC+k6mi5c63ytGrrctHmI5MtyMfpaiMPEqCe8lJj9E+4zHRMZ7PC+NNeAzXnb9b1U5GhoChc6fet9WWWzkkzgFPOVjvOdFTxMNUMBDObPMvIhybQNU8CPn/1UhVoYBJTwTs8utJ6yaBWrWk5iz36vqNZNADQ+MZhKsVs0KviK+9b+cz/HP+g6gjAeix1wD9O1Xx7fx5/qYcYGpNZBxfNeA+2QMSHXdfxm+y/LD4StI7UEz+PaJEp4jfKE5+svx3dL6OpyGXOiZr4PvGtAMcrX7nvjWCQcbDmc959PFA8qv4Yve4GvjAaUYoLkCVlluTD9Jt13w8UxIJWnXYZx6msJ7z8ltS3kFrLn8V8CfvCg4jP5gIKUfzVYTL+5mWBqU8sKS5AXYUTP3U8S3q5pzyNomfItKGGyxVpvF/PgnvhyrJKtFqzC/DF+8upnfAvwbnTRDviG8dtprBK878mbwR92uN4LnoX6msXh3Y9zzYkWe8xl/fXuOwZtVaabKGy8o5hb41WNdigfMP0W/4vWkJYQieFaR7APHqLrVMDnhzN/MIcSrHzSPZ1K0utzO9zDG6e0FsdGlqO7wFLFshTh/fkq57Sthli/EWb4OaPsypOWroLYvwtq+Bmz7ErRn7Qr4H4//K0QVI2B+AAAAAElFTkSuQmCC",
  },
  {
    name: "Github",
    category: "tool",
    src: "https://cdn-icons-png.flaticon.com/128/1051/1051326.png",
  },
  {
    name: "NodeJs",
    category: "backend",
    src: NodeJS,
  },
  {
    name: "ExpressJs",
    category: "backend",
    src: Express,
  },
  {
    name: "MongoDb",
    category: "backend",
    src: MongoDB,
  },
  {
    name: "Git",
    category: "tool",
    src: Git,
  },
  {
    name: "Postman",
    category: "tool",
    src: Postman,
  },
  {
    name: "Thunder",
    category: "tool",
    src: Thunder,
  },
];
export const Skills = () => {
  let [data, setData] = useState(tecStack);
  let [state, setState] = useState("all");
  let handleFilter = (val) => {
    setState(val);
    if (val == "all") {
      setData(tecStack);
    } else {
      let filterStack = tecStack.filter((ele) => ele.category == val);
      setData(filterStack);
    }
  };

  return (
    <Box padding={"6%"} textAlign={"center"} id="skills">
      <Typewriter
        options={{
          strings: ["TECH SKILLS"],
          autoStart: true,
          loop: true,
          wrapperClassName: "skillsName",
          cursorClassName: "headingCursor",
        }}
      />
      {/* <Heading>TECH SKILLS</Heading> */}
      <Box p={"3%"}>
        <Flex justifyContent={"center"} gap={{ base: "4", sm: "5" }}>
          <SimpleGrid gap={{ base: "4", sm: "5" }} columns={{ base: 2, sm: 4 }}>
            {/* <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            > */}
            <Button
              onClick={() => handleFilter("all")}
              bg={state == "all" ? "green" : "#0D74FF"}
              color={state === "all" && "white"}
              border={state === "all" && "1px solid red"}
              _focus={{ bg: "green" }}
              _active={{ bg: "green" }}
            >
              All
            </Button>
            {/* </motion.button> */}

            <Button
              _focus={{ bg: "green" }}
              _active={{ bg: "green" }}
              className={state === "frontend" ? "frontend" : "general"}
              onClick={() => handleFilter("frontend")}
              bg={state == "frontend" ? "green" : "#0D74FF"}
              color={state === "frontend" && "white"}
              border={state === "frontend" && "1px solid red"}
            >
              Frontend
            </Button>

            <Button
              _focus={{ bg: "green" }}
              _active={{ bg: "green" }}
              className={state === "backend" ? "backend" : "general"}
              onClick={() => handleFilter("backend")}
              bg={state == "backend" ? "green" : "#0D74FF"}
              color={state === "backend" && "white"}
              border={state === "backend" && "1px solid red"}
            >
              Backend
            </Button>
            <Button
              _focus={{ bg: "green" }}
              _active={{ bg: "green" }}
              className={state === "tools" ? "tools" : "general"}
              onClick={() => handleFilter("tool")}
              bg={state == "tool" ? "green" : "#0D74FF"}
              color={state === "tool" && "white"}
              border={state === "tool" && "1px solid red"}
            >
              Tools
            </Button>
          </SimpleGrid>
        </Flex>
      </Box>

      <SimpleGrid
        columns={{ base: 4, sm: 4, md: 5, lg: 6, xl: 7 }}
        spacing="40px"
        marginTop={"20px"}
      >
        {data.map((ele, i) => {
          return (
            <Box key={i}>
              <Box key={Math.random()} className="tec-stack skills-card">
                <Center width={"100%"} height={"100%"}>
                  <motion.div
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", duration: 2, delay: 0.5 }}
                  >
                    <Image
                      className="skillImage skills-card-img"
                      src={ele.src}
                      alt="tecStack Logo"
                    />
                  </motion.div>
                </Center>
                <Box>
                  <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", duration: 2, delay: 0.5 }}
                  >
                    <Text
                      className="skills-card-name"
                      fontWeight="bold"
                      fontSize={{
                        base: "8px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                        xl: "14px",
                      }}
                    >
                      {ele.name}
                    </Text>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
