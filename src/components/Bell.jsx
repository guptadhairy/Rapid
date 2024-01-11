import { HStack } from '@chakra-ui/react'
import React from 'react'
import { FaRegBell } from 'react-icons/fa'

const Bell = () => {
  return (
    <HStack width={"100%"} height={"30px"} display={"flex"} justifyContent={"flex-end"} mt={"20px"} ml={"-20px"}>
       <FaRegBell fontSize={"30px"} />
    </HStack>
  )
}

export default Bell
