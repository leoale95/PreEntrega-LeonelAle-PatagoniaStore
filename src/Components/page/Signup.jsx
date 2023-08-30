import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';
import {  Flex,  Box,  FormControl,  FormLabel,  Input,  Button,  Heading,  Text,  Link,  useColorModeValue,} from '@chakra-ui/react';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Heading fontSize={'2xl'} textAlign={'center'}>
          Sign up for Patagonia Store
        </Heading>
        <Text fontSize={'md'} color={'gray.600'} mt={2} textAlign="center">
          Create an account to get started
        </Text>
        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </FormControl>
        <Button
          mt={6}
          w="full"
          onClick={onSubmit}
          colorScheme="blue"
          isLoading={false}
          loadingText="Signing Up">
          Sign up
        </Button>
        <Text mt={4} textAlign="center">
          Already have an account?{' '}
          <Link as={NavLink} to="/login" color="blue.500">
            Sign in
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Signup;
