import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import {Icon,} from '@chakra-ui/react';

const CartWidget = () => {
  return (
    <Flex>
      <Box>
      <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
      </Box>
      <Spacer />
      <Box>
        <p> 5 </p>
      </Box>
    </Flex>
  );
};

export default CartWidget;
