import React, { useState } from 'react';
import { Flex, Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon, RepeatIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import {Icon,} from '@chakra-ui/react';


const ItemCount = ({stock, addItem}) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
       }
  };

  const reset = () => {
    setQuantity(0);
  };

  return (
    <>
    
    <Button onClick={() => addItem(quantity)} disabled={!stock}

            rounded={"none"}
            w={"full"}
            mt={1}
            size={"lg"}
            py={"1"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            >
            Add to cart
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf='center' />
          </Button>
          
          <Flex >
      <IconButton onClick={decrement} aria-label='Decrement count' icon={<TriangleDownIcon />} />
      <Button>{quantity}</Button>
      <IconButton onClick={increment} aria-label='Increment count' icon={<TriangleUpIcon />} />
      <IconButton onClick={reset} aria-label='Increment count' icon={<RepeatIcon />} />
      </Flex>
    </>

  );
};

export default ItemCount;

