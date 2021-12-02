import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import {
  HStack,
  Divider,
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Link,
} from "@chakra-ui/layout";
import Login_1 from "./assets/main_left.png";
import Logo_lg from "./assets/Emoji.png";
import Logo_sm from "./assets/Emoji_right.png";
import { RiGoogleLine, RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { Link as ReachLink } from "@reach/router";
import Proflogin from "./Proflogin";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [count, setCount] = useState("");
  const navigate = useNavigate();
  const [bgColor, setbgColor] = useState("#F2F6FE");
  const [bgColor1, setbgColor1] = useState("#F2F6FE");
  const [Colour, setColour]=useState("");
  const [Colour1, setColour1]=useState("");
  const [bor, setBor]=useState("#C9DAE0");
  const [bor1, setBor1]=useState("#C9DAE0");
  const [butColor, setbutColor] = useState("#BEDDFF");
  
  const boxClick = (e) => {
    setbgColor("#E8F3FF");
    setbgColor1("#F2F6FE");
    setCount("l");
    setColour("#0065CF");
    setColour1("");
    setbutColor("#1684F8");
    setBor("#1684F8");setBor1("#C9DAE0");
  }
  const boxClick1 = (e) => {
    setbgColor("#F2F6FE");
    setbgColor1("#E8F3FF");
    setCount("r");
    setColour("");
    setColour1("#0065CF");
    setbutColor("#1684F8");
    setBor("#C9DAE0");
    setBor1("#1684F8");
  }
  console.log(props);

  return (
    <Flex flexDir="row" height="105vh">
      <Flex flex="1" display={["none", "none", "block", "block"]} bg="#F2F6FE">
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="space-evenly"
          height="full"
        >
          <Flex>
            <Image width={["300px","300px","430px","430px"]} src={Login_1} alt="EC_Login_1" objectFit="contain" />
          </Flex>
        </Flex>
      </Flex >
      <Flex flex="1" display="block" >
        <VStack>
          <Flex width="820px" mt="80px" ml="80px" mr="80px">
            <HStack sp={12}>
              <Box
                borderRadius="10px"
                p="4"
                bg="#1684F8"
                color="white"
                round=""
                width="60px"
                fontSize="20px"
                textAlign="center"
              >
                1
              </Box>
              <Box maxWidth="150px">Choose type of profile</Box>
            </HStack>
            <Spacer />
            <HStack>
              <Box
                borderRadius="10px"
                p="4"
                bg="#E3E8F2"
                color="#5C7282"
                round=""
                width="60px"
                fontSize="18px"
                textAlign="center"
              >
                2
              </Box>
              <Box maxWidth="150px">Enter some details about you</Box>
            </HStack>
          </Flex>
          <Divider width="820px" color="black" />
          <br />
          <Box width="820px" textAlign="left" >
          <Heading fontSize="4xl" fontFamily="Satoshi"fontWeight="Bold"height="62px"  >I will use Engineer's Cradle as a</Heading></Box>
          
          <Box width="820px">
            <HStack >
              <Box
                bg={bgColor}
                width="398px"
                height="400px"
                pt="40px"
                pl="24px"
                mr="21px"
                color={Colour}
                borderColor={bor}
                borderRadius="12px"
                border="4px"
                // onClick={() => setCount("l")}
                onClick={boxClick}
                              /*onClick={() => {
                                  navigate("www.google.com")}}*/ 
                _hover={{ bg: "#E8F3FF",color:"#0065CF",borderColor:"#1684F8"  }}
                _active={{ bg: "#E8F3FF" }}
              >
                <Image
                  justifySelf="left"
                  src={Logo_lg}
                  alt="EC_Logo_lg"
                  objectFit="contain"
                />
                <Text mt="5px" fontSize="32px">
                  Student
                </Text>
                <Text mt="5px" fontSize="14px" maxWidth="350px" height="76px">
                  Join as student get access to the finest mentors, industrial
                  experts and resources to help you expand your breadth of
                  knowledge
                </Text>
              </Box>
              <Box
                bg={bgColor1}
                width="398px"
                height="400px"
                pt="40px"
                pl="24px"
               // onClick={() => setCount("r")}
               onClick={boxClick1}
                _hover={{ bg: "#E8F3FF" }}
                _click={{ bg: "#E8F3FF" }}
                color={Colour1}
                borderColor={bor1}
                border="4px"
                borderRadius="12px"
              >
                <Image src={Logo_sm} alt="EC_Logo_lg" objectFit="contain" />
                <Text mt="5px" fontSize="32px">
                  Professional
                </Text>
                <Text mt="5px" fontSize="14px" maxWidth="350px" height="76px">
                  Join as professional and engage with students as mentor,
                  faculty and influencer.
                </Text>
              </Box>
            </HStack>
            <br />
           
            <Box textAlign="center">
               {count==='' &&
                 <Button bg={butColor} color="white" width="249px">Continue</Button>
                }
                {count==='l' &&
                <Button bg={butColor} color="white" width="249px"onClick={() => {
                                  navigate("/Studentlogin")}}>Continue  </Button>
               }
                {count==='r' &&
                <Button bg={butColor} color="white" width="249px"onClick={() => {
                                  navigate("/proflogin")}}>Continue  </Button>
           } 
           </Box>
          </Box>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Login;
