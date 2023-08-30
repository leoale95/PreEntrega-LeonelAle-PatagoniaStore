import React from 'react';
import { Flex, Box, } from '@chakra-ui/react';
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
         <Link to='/cart'>
          <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center'_hover={{ color: 'green.500' }} />
        </Link>
      </Box>
      <Box style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      {totalQuantity}
      </Box>
    </Flex>
  );
};

export default CartWidget;

