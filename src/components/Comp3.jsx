import { Heading, VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import "../styles/comp3.css"
import Slider from "./Slider"
const Comp3 = () => {
       return (

              <VStack mt={"60px"} mr={"30px"}  className='compo'>
                     <VStack flexDir={"column"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} minH={"50vh"} className='comp3' width={"70%"}>
                            <Heading fontSize={"0.9rem"}>Retirement Strategy</Heading>
                            <Text className='emp'>Employee Contribution</Text>
                            <Slider sliderValue={"12%"} />
                            <Text className='emp2'>Retirement Age</Text>
                            <Slider sliderValue={"65"} />
                            <hr className='lines' />
                            <HStack width={"100%"} justifyContent={"space-between"} >
                                   <Text className='emp2'>Employer Contribution</Text>
                                   <Text className='emp2'>8.4%</Text>
                            </HStack>
                            <HStack width={"100%"} justifyContent={"space-between"}>
                                   <Text className='emp'>Interest Rate</Text>
                                   <Text className='emp'>5%</Text>
                            </HStack>
                            <button className='update'>Update</button>
                            <Text className='view' color={"blue"}>View Help Docs {">"}</Text>
                     </VStack>
                     <HStack ml={"-35px"} >
                            <div class="vl"></div>
                            <VStack  display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                                   <Text color={"gray"} fontSize={"0.8rem"}>Are you considering a</Text>
                                   <Text mt={"-20px"} className='emp'>Housing Advance?</Text>
                                   <Text mt={"-10px"} color={"gray"} fontSize={"0.67rem"}>Limited time reduced interest.</Text>
                                   <Text mt={"-10px"} color={"blue"} fontWeight={"bold"} fontSize={"0.68rem"}>Learn More {">"}</Text>
                            </VStack>
                     </HStack>
              </VStack>

       )
}

export default Comp3
