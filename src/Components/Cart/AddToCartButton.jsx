import { useToast } from '@chakra-ui/react';
import React from 'react';
import { Icon, Tooltip, chakra } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../Context/CartContext';

const AddToCartButton = ({ id }) => { // Recibe 'id' como una propiedad
  const { addItem } = useCart();
  const toast = useToast();

  const handleAddToCart = () => {
    addItem(id, 1); // Usamos el 'id' que se pasó como propiedad
    toast({
      title: 'Item added to cart',
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Tooltip label="Add to cart" bg="white" placement={'top'} color={'gray.800'} fontSize={'1.2em'}>
      <chakra.a href={'#'} display={'flex'} onClick={handleAddToCart}>
        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
      </chakra.a>
    </Tooltip>
  );
};

export default AddToCartButton;
