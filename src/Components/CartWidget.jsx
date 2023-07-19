import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import Carrito from '../Media/cart.svg';

const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <img src={Carrito} alt="cart" width="50px" height="50px" />
      </Box>
      <Spacer />
      <Box>
        <p> 5 </p>
      </Box>
    </Flex>
  );
};

export default CartWidget;
