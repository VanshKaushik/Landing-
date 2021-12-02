import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Spacer } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import { HStack, Divider,Box, Flex, Text,Heading, VStack, Link } from '@chakra-ui/layout';
import Login_1 from './assets/student_left.png';
import Logo_lg from './assets/Emoji.png';
import Logo_sm from './assets/Emoji_right.png';
import { useNavigate } from "react-router-dom";

import { CheckIcon } from '@chakra-ui/icons'
import { Link as ReachLink } from "@reach/router";
import { useState } from 'react';
function Student() {
    const [data,setData] = useState({
        title:"",
        year:"" 
      })
      function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata);
        }
        const navigate = useNavigate();


	return (

		<Flex flexDir='row' height='100vh'>
			<Flex flex='1' display={['none', 'none', 'block', 'block']} bg='#F2F6FE' >
				<Flex
					flexDir='column'
					alignItems='center'
					justifyContent='space-evenly'
					height='full'
                    justify="center"
                    textAlign="center"
                    pt="30px"
				>
				
                <Image width="500px"  src={Login_1} alt='EC_Login_1' objectFit='contain' />
                
				</Flex>
			</Flex>
			<Flex flex='1' display='block'  >
				<VStack>
                <Flex width="820px"  mt="80px" ml="80px" mr="80px">
                <HStack>
                    <Box borderRadius="10px" p="4"   bg="#BEDDFF" round="" color="#5C7282" width ="60px" fontSize="20px"  alignItems="center">
                    <CheckIcon w={8} h={8} color="white" /> 
                    </Box>
                    <Box maxWidth="150px">
                        Choose type of profile
                    </Box>
                </HStack>
                <Spacer />
                <HStack>
                    <Box borderRadius="10px" p="4"bg="#1684F8" color="white"  round="" width ="60px" fontSize="18px" textAlign="center">
                        2   
                    </Box>
                    <Box maxWidth="150px">
                        Enter some details about you
                    </Box>
                </HStack>
                
                </Flex>
                <Divider width="820px" color="black"/>
                    <br/>
                <Heading fontSize="32px" width="820px" ml="80px" mr="80px">We require some information from you to deliver our best</Heading>
                <br/>
                <Box width="820px" >
                <Box width="820px" border="1px" borderRadius="24px" borderColor="#C9DAE0">
                <Box pt="24px" pl="24px">
                College/University name    
                <Input placeholder="VIT, Vellore" bg="#F2F6FE" width="772px"  color="#8091BC" id="title" onChange={(e) => handle(e)} value={data.title} name="title"></Input>
                </Box><br/>
                <Box pl="24px">
                Graduation Year    
                <Select placeholder="2023" bg="#F2F6FE" width="772px"  color="#8091BC" id="year" name="year" onChange={(e) => handle(e)} value={data.year} >

                <option value="option1">2023</option>
                <option value="option2">2024</option>
                <option value="option3">2025</option>
                
                </Select>
                
                </Box><br/>
                </Box>
                <br/>
                <Box width="820px" mt="36px" border="1px" borderRadius="24px" borderColor="#C9DAE0">
                <Box pt="24px" pl="24px">
                Core Engineering branch    
                <Select placeholder="Computer Science Engineering" bg="#F2F6FE" width="772px" color="#8091BC" >
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Chemical Engineering">Chemical Engineering</option>
                </Select>
                </Box><br/>
                <br/>
                </Box>
                <br/>
                <Box>
                <HStack justify="center" sp={1}>
            
                <Button bg="white" color="#1684F8"borderColor="#1684F8" height="56px" border="2px" width="249px" borderRadius="16px"onClick={() => {
                                  navigate(-1)}}>Back</Button>
                <Button bg="#BEDDFF" color="white" height="56px" width="249px"borderRadius="16px" _hover={{ bg: "#1684F8"}}>Continue  </Button>
                </HStack>
                </Box>
                </Box>

                </VStack>
					
			</Flex>
		</Flex>
	);
}

export default Student;
