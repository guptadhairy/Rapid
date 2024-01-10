import { HStack, Heading, VStack, Text, Stat, StatArrow } from '@chakra-ui/react'
import React from 'react'
import profile from "../assets/lms.jpg"
import "../styles/comp1.css"

const Comp1 = () => {
       return (
              <VStack display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"28%"} className='mike'>
                     <div className='mikes'>
                     <HStack mt={"40px"} gap={"20px"}>
                            <img className='profile' src={profile} alt='profile' />
                            <VStack>
                                   <Heading>Hi Mike,</Heading>
                                   <Text ml={"-5 px"} mt={"-20px"}>welcome back</Text>
                            </VStack>
                     </HStack>
                     <Heading  mt={"28px"} display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} fontSize={"1.1rem"}>Today</Heading>
                     <Heading >$19,892</Heading>
                     <Text fontSize={"0.7rem"} mt={"-17px"}>Account Balance</Text>
                     <Heading fontSize={"1rem"}>$4,000</Heading>
                     <Text fontSize={"0.7rem"} mt={"-10px"}>Year-to-Date Contributions</Text>
                     <Heading  fontSize={"1rem"}>$1,892</Heading>
                     <Text fontSize={"0.7rem"} mt={"-10px"}>Total Interest</Text>
                     <button className='button'> I want to <Stat>
                            <StatArrow></StatArrow></Stat></button>
                     <Heading mt={"50px"} fontSize={"0.8rem"}>Recent Transactions</Heading>
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
                     
              </VStack>
       );
};

export default Comp1;
