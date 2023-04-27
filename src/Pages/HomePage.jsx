/** @format */
import styled from "styled-components";
import React from "react";
import { Image, Box, Flex, Heading } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Box id="home" padding={'6%'}>
      <Flex alignItems={"center"} justifyContent={"space-around"}>
        <Box>
          <Heading>Hello, my name is</Heading>
          <Heading
            id="user-detail-name"
            style={{ fontFamily: "cursive", color: "red" }}
          >
            Ranjan Yadav
          </Heading>
          <Heading>I'm a full stack web developer</Heading>
        </Box>

        <Box>
          <Image
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
