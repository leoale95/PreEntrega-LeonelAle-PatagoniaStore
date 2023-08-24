import React from 'react';
import { Link} from 'react-router-dom';
import { Button, Stack, Text } from '@chakra-ui/react';
import CartItem from './CartItem';
import { useCart } from '../../Context/CartContext';
import  Error  from '../Error/Error'


const Cart = () => {
  const { cart,  totalQuantity, total } = useCart();

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
      <Text>Total: U$D{total}</Text>

      
        
      <Button
              
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              >
        <Link to='/checkout' >
        Checkout
      </Link>
        </Button>
              </Stack>
      
      
    
  );
};

export default Cart;
