import { HStack } from '@chakra-ui/react'
import React from 'react'
import { FaAddressCard, FaRegListAlt, FaRegUser, FaSearch } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
const PhoneNav = () => {
  return (
    <HStack height={"50px"} display={"flex"} bgColor={"white"} justifyContent={"space-evenly"} pr={"5px"} bottom={"0"} width={"100%"} position={"fixed"} className='pnav' >
       <FiHome className='home' color='white' fontSize={"30px"} />
       <FaAddressCard fontSize={"30px"} />
       <FaRegListAlt fontSize={"30px"} />
       <FaRegUser fontSize={"27px"} />
       <FaSearch fontSize={"25px"}/>
    </HStack>
  )
}

export default PhoneNav
