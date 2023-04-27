import { Link, ListItem ,UnorderedList,Box, Heading,Button,Avatar} from '@chakra-ui/react'
import React from 'react'

export const Contact = () => {
  return (
    <Box id='contact' background={'white'} color={'black'} padding={'6%'} textAlign={'center'} >
  
      <Heading>Contact</Heading>

      <UnorderedList marginTop={"20px"}>
        <Link
          target="_blank"
          style={{ textDecoration: "none" }}
          href="https://ranjan095.github.io/"
        >
          {" "}
          <ListItem>Ranjan yadav</ListItem>
        </Link>
        <Link
          target="_blank"
          style={{ textDecoration: "none" }}
          href="https://mail.google.com/mail/u/0/#inbox?compose=new/"
        >
          {" "}
          <ListItem>iranjan095@gmail.com</ListItem>
        </Link>
        <Link
          target="_blank"
          style={{ textDecoration: "none" }}
          href="https://web.whatsapp.com/"
        >
          {" "}
          <ListItem>+917079062877</ListItem>
        </Link>
        <Link
          target="_blank"
          style={{ textDecoration: "none" }}
          href="https://madhubani.nic.in/hi/"
        >
          {" "}
          <ListItem>Madhubani Bihar</ListItem>
        </Link>
      </UnorderedList>
      <Button variant={"solid"} size={"sm"} mr={2}>
              <Avatar
                size={"sm"}
                src={
                  "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                }
              />
            </Button>
            <Button variant={"solid"} size={"sm"} mr={2}>
              <Avatar
                size={"sm"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjyMub5re7ZkmcZ3sa85cCuWT5k1wZ2JICA&usqp=CAU"
                }
              />
            </Button>
           <Link href='https://github.com/Ranjan095' target="_blank">
           <Button variant={"solid"} size={"sm"} mr={2}>
              <Avatar
                size={"sm"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ9BLaQr8gi24WdvoAcllLM31YXU-35ip4A&usqp=CAU"
                }
              />
            </Button></Link>
      <hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
    </Box>
  )
}
