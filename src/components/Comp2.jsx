import React from 'react'
import "../styles/comp2.css"
import { HStack, Heading, VStack, Text, StatArrow, Stat, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import BarChart from './BarChart'
const Comp2 = () => {
       return (
              <VStack pl={"60px"} display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"} width={"50%"} className='income'>
                     <Heading mt={"50px"} color={"blue"} fontSize={"0.9rem"} fontWeight={"extrabold"}>Retirement Income</Heading>
                     <Heading mt={"-17px"} fontSize={"1.1rem"} >Starting Year 2056</Heading>
                     <HStack  ml={"-36px"} justifyContent={"space-evenly"} width={"70%"}>
                            <VStack direction={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                                   <Heading fontSize={"1.3rem"}>$300,000</Heading>
                                   <Text fontSize={"0.7rem"} mt={"-20px"}>My Goal</Text>
                                   <hr className='line' />
                            </VStack>
                            <VStack direction={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                                   <Heading fontSize={"1.3rem"}>59%</Heading>
                                   <Text fontSize={"0.7rem"} mt={"-20px"}>Goal Achieved</Text>
                                   <hr className='line' />
                            </VStack>
                            <VStack direction={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                                   <Heading fontSize={"1.3rem"}>$300</Heading>
                                   <Text fontSize={"0.7rem"} mt={"-20px"}>Est. Monthly Income</Text>
                                   <hr className='line' />
                            </VStack>
                     </HStack>
                     <Heading mt={"30px"} fontSize={"0.9rem"}>Contributions Overtime</Heading>
                     <BarChart />
                     <Heading mt={"50px"} fontSize={"0.9rem"}>How do I compare my peers?</Heading>
                     <Text className='text3'>These numbers represent current goal achievement</Text>
                     <HStack>
                            <VStack   display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                                   <HStack>
                                   <Text className='text4'><b>Age</b>: Under30</Text>
                                   <Stat>
                                          <StatArrow color={"gray"} />
                                   </Stat>
                                   </HStack>
                                   <hr className='lines2' />
                                   <HStack>
                                   <Text className='text5'><b>Salary</b>: K20 - k30</Text>
                                   <Stat mt={"-30px"}>
                                          <StatArrow color={"gray"} />
                                   </Stat>
                                   </HStack>
                                   <hr className='lines2' />
                                   <HStack>
                                   <Text className='text5'><b>Gender</b>: Male</Text>
                                   <Stat mt={"-30px"}>
                                          <StatArrow color={"gray"} />
                                   </Stat>
                                   </HStack>
                                   
                            </VStack>
                            <HStack  ml={"60px"} gap={"17px"}>
                                   <VStack >
                                   <CircularProgress size={"70px"} value={78} color='cyan'>
                                          <CircularProgressLabel mt={"-10px"}>78%</CircularProgressLabel>
                                   </CircularProgress>
                                   <Text fontSize={"0.7rem"} mt={"-25px"}>Average</Text>
                                   </VStack>
                                   <VStack>
                                   <CircularProgress size={"70px"} value={95} color='cyan'>
                                          <CircularProgressLabel mt={"-10px"}>95%</CircularProgressLabel>
                                   </CircularProgress>
                                   <Text fontSize={"0.7rem"} mt={"-25px"}>Top</Text>
                                   </VStack>
                                   <VStack >
                                   <CircularProgress size={"70px"} value={59} color='cyan'>
                                          <CircularProgressLabel mt={"-10px"}>59%</CircularProgressLabel>
                                   </CircularProgress>
                                   <Text fontSize={"0.7rem"} mt={"-25px"}>Me</Text>
                                   </VStack>
                            </HStack>
                     </HStack>
              </VStack>
       )
}

export default Comp2
