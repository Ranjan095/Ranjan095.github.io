/** @format */
import styled from "styled-components";
import React from "react";
import { Image, Box, Flex, Heading } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <Box id="home" padding={"6%"}>
      <Flex alignItems={"center"} justifyContent={"space-around"}>
        <Box width={"70%"}>
          <Flex
            id="user-detail-name"
            justifyContent={"left"}
            alignItems={"center"}
            gap="3"
            // border={'2px solid yellow'}
          >
            <Heading
              size={{
                base: "xs",
                xs: "sm",
                mdr: "md",
                xl: "lg",
              }}
              fontWeight={"medium"}
            >
              Hello, my name is{" "}
            </Heading>

            <Typewriter
              options={{
                strings: ["Ranjan Yadav"],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 50,
                wrapperClassName: "typedWrapper",
                cursorClassName: "typedCursor",
              }}
            />
          </Flex>
          <Flex
            id="user-detail-name"
            justifyContent={"left"}
            alignItems={"center"}
            gap="3"
            // border={'2px solid yellow'}
          >
            <Heading
              size={{
                base: "xs",
                xs: "sm",
                mdr: "md",
                xl: "lg",
              }}
              fontWeight={"medium"}
            >
              I'm a{" "}
            </Heading>

            <Typewriter
              options={{
                strings: ["Full-stack Web Developer"],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 50,
                wrapperClassName: "typedWrapper",
                cursorClassName: "typedCursor",
              }}
            />
          </Flex>
        </Box>

        <Box>
          <Image
            className="home-img"
            style={{
              width: "60%",
              height: "60%",
              borderRadius: "50%",
              marginTop: "10%",
              border: "1.2px solid red",
            }}
            src="https://avatars.githubusercontent.com/u/113471389?v=4"
          />
        </Box>
      </Flex>
    </Box>
  );
};
// const Div = styled.div`
//   .homeBox {
//     margin: 20px;
//     display: flex;
//     /* height: 650px; */
//   }
//   .rbutton {
//     padding: 10px;
//     width: 100px;
//     color: white;
//     background-color: green;
//     border-radius: 20px;
//     border: none;
//   }
//   .rbutton:hover {
//     background-color: red;
//     font-size: 20px;
//   }
// `;
