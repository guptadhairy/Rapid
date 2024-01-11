import { HStack, Heading, VStack, Text, Stat, StatArrow } from '@chakra-ui/react'
import React from 'react'
import profile from "../assets/lms.jpg"
import "../styles/comp1.css"

const Comp1 = () => {
       return (
              <VStack display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}  className='mike'>
                     <div className='mikes'>
                     <HStack mt={"40px"} gap={"20px"}>
                            <img className='profile' src={profile} alt='profile' />
                            <VStack>
                                   <Heading>Hi Mike,</Heading>
                                   <Text ml={"-5 px"} mt={"-20px"}>welcome back</Text>
                            </VStack>
                     </HStack>
                     <div className='rmike'>
                     <Heading  mt={"28px"} display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} fontSize={"1.1rem"}>Today</Heading>
                     <Heading className='hmike' >$19,892</Heading>
                     <Text color={"gray"} fontWeight={"bold"} fontSize={"0.7rem"} mt={"-17px"}>Account Balance</Text>
                     <div className='r2mike'>
                     <div>
                     <Heading className='r4mike'>$4,000</Heading>
                     <Text className='r3mike' color={"gray"} fontWeight={"bold"} fontSize={"0.7rem"} >Year-to-Date Contributions</Text>
                     </div>
                     <div>
                     <Heading className='r4mike'>$1,892</Heading>
                     <Text color={"gray"} fontWeight={"bold"} fontSize={"0.7rem"} mt={"-10px"}>Total Interest</Text>
                     </div>
                     </div>
                     <button className='button'> I want to <Stat className='r5'>
                            <StatArrow></StatArrow></Stat></button>
                     </div>
                     <div className='r5mike'>
                     <Heading mt={"50px"} fontSize={"1rem"}>Recent Transactions</Heading>
                     <Text className='text'>2020-08-07</Text>
                     <Text className='text2'>Withdrawal Transfer to Bank-XXX11</Text>
                     <hr className='lines'/>
                     
                     <Text className='text'>2020-07-21</Text>
                     <Text className='text2'>Withdrawal Transfer to Bank-XXX11</Text>
                     <hr className='lines'/>
                     <Text className='text'>2020-07-16</Text>
                     <Text className='text2'>Withdrawal Transfer to Bank-XXX11</Text>
                     <hr className='lines'/>
                     </div>
                     </div>
                     
              </VStack>
       );
};

export default Comp1;
