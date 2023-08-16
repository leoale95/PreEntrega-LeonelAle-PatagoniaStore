import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import {Icon,} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
const { totalQuantity} = useContext(CartContext)

  return (
    <Flex>
      <Box>
        <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
          <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center' />
        </Link>
      </Box>
      {totalQuantity}
    </Flex>
  );
};

export default CartWidget;

