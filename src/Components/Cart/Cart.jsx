import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Text, Stat, StatLabel, StatHelpText, StatNumber, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import CartItem from './CartItem';
import { useCart } from '../../Context/CartContext';
import Error from '../Error/Error';

const Cart = () => {
  const { cart, totalQuantity, total } = useCart();

  if (totalQuantity === 0) {
    return (
      <Error />
    );
  }

  return (
    
    <Stack>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}

      <Flex
        minH={'60vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box>
          <Stat>
            <StatLabel>Resumen compra</StatLabel>
            <StatNumber>Total USD {total}</StatNumber>
            <StatHelpText>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </StatHelpText>
          </Stat>

          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'blue.500' }}>
            <Link to="/checkout">Checkout</Link>
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Cart;

