import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import {  Card,  Flex,  Box, Text,  Button,  Heading,} from '@chakra-ui/react';

const CartItem = ({ id, nombre, price, quantity }) => {
  const { cart, clearCart, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);

  return (
    <Card p={4}>
      <Flex justify="space-between" alignItems="center">
        <Box flex="1">
          <Heading size="md">{nombre}</Heading>
          <Text>{`Quantity: ${quantity}`}</Text>
          <Text>{`Price: $${price * quantity}`}</Text>
        </Box>
        <Box>
          <Button variant="solid" colorScheme="blue" onClick={() => increaseItemQuantity(id)}>
            +
          </Button>
          <Button colorScheme="red" variant="solid" onClick={() => decreaseItemQuantity(id)}>
            -
          </Button>
          <Button colorScheme="red" variant="solid" onClick={() => clearCart()}>
            X
          </Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default CartItem;
