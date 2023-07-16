import React from 'react'
import { Flex, Box, Spacer} from "@chakra-ui/react"
import { SunIcon } from '@chakra-ui/icons';

const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <SunIcon/>
      </Box>
      <Spacer />
      <Box>
        <p> 5 </p>
      </Box>
    </Flex>
  );
}

export default CartWidget
