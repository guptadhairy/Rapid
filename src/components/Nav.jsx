import { VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.png";
import "../styles/nav.css";
import {FaSearch, FaAddressCard, FaRegListAlt, FaRegUser, FaRegBell, FaMobile} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import PhoneNav from './PhoneNav';



const Nav = () => {
  return (
    <div className='nav'>
      <VStack width={"7%"}   display={'flex'} justifyContent={"flex-start"} alignItems={"flex-start"}>
       <VStack gap={"20px"}>
       <img className='logo' src={logo} alt='logo' />
       <FaSearch fontSize={"20px"}/>
       </VStack>
       <VStack mt={"60px"} gap={"30px"}>
       <FiHome color='blue' fontSize={"22px"} />
       <FaAddressCard fontSize={"20px"} />
       <FaRegListAlt fontSize={"20px"} />
       <FaRegUser fontSize={"20px"} />
       </VStack>
       <VStack gap={"20px"} mt={'350px'}>
       <FaRegBell fontSize={"20px"} />
       <FaMobile fontSize={"20px"} />
       </VStack>
      </VStack>
      <PhoneNav />
    </div>
  )
}

export default Nav