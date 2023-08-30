import React, { useState } from 'react';
import {  Box,  Button,  Flex,  Heading,  FormControl,  FormLabel,  Input,
  useColorModeValue} from '@chakra-ui/react';
  import {useNavigate } from 'react-router-dom';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      phone: phone,
      email: email,
    };
    
    onConfirm(userData);

    // Resetear los campos después de confirmar
    setName('');
    setPhone('');
    setEmail('');

    setTimeout(() => {
      navigate("/");
    }, 7500); // Navegar después de 5 segundos
    
       
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Heading fontSize={'2xl'} textAlign={'center'}>
          Checkout de la compra
        </Heading>
        

      <form onSubmit={handleConfirm}>
        <FormControl mt={4}>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Phone:</FormLabel>
          <Input
            type="text"
            value={phone}
            placeholder="000-000-000"
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <Button
            mt={6}
            w="full"
            type="submit"
            colorScheme="blue"
            bg={useColorModeValue('blue.400', 'blue.600')}
            _hover={{ bg: useColorModeValue('blue.500', 'blue.700') }}>
            Confirmar Orden
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default CheckoutForm;

