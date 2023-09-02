import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Services/firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import {  Flex,  Box,  FormControl,  Center,  Stack,  FormLabel,  Input,  Button,
  Text,  Link,  useColorModeValue,} from '@chakra-ui/react';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginWithGoogle } = useAuth(); // Import the loginWithGoogle function from your AuthContext

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
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
        <Text fontSize={'2xl'} textAlign={'center'} mb={4}>
          Log in to Patagonia Store
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
          onClick={onLogin}
          colorScheme="blue"
          isLoading={false}
          loadingText="Logging In">
          Login
        </Button>
        <Center p={8}>
          <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
            {/* Google */}
            <Button
              w={'full'}
              variant={'outline'}
              leftIcon={<FcGoogle />}
              onClick={handleGoogleSignin}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>
        </Center>
        <Text mt={4} textAlign="center">
          No account yet?{' '}
          <Link as={NavLink} to="/signup" color="blue.500">
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;

