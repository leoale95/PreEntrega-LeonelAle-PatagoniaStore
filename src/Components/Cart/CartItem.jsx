import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Card,  Grid, GridItem, Heading, Text, Button } from '@chakra-ui/react';

const CartItem = ({ id, nombre, price, quantity,  }) => {
  const { cart, clearCart, increaseItemQuantity, decreaseItemQuantity } = useContext(CartContext);
  

  return (
    <Card>
      <Grid templateColumns="repeat(4, 1fr)" justifyContent="center" alignItems="center" >
        <GridItem w="100%" h="10"  px="2"
         > 
        <Heading size="md">{nombre}</Heading>
        </GridItem>
      

        <GridItem w="100%" h="10"  >
        <Text >{`Quantity: ${quantity}`}</Text>
        </GridItem>

        <GridItem w="100%" h="10"  >
        <Text>{`Price: $${price * quantity}`}</Text>
        </GridItem>

        <GridItem w="100%" h="10"  >
        <Button variant="solid" colorScheme="blue" onClick={() => increaseItemQuantity(id)}>
          +
        </Button>
        <Button colorScheme="red" variant="solid" onClick={() => decreaseItemQuantity(id)}>
          -
        </Button>

        
        <Button colorScheme="red" variant="solid" onClick={() => clearCart()}>
          X
        </Button>
        
        </GridItem>
      </Grid>
    </Card>
  );
};

export default CartItem;

