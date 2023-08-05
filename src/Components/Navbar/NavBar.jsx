import React from 'react';
import { Box, Flex, Avatar, HStack, IconButton, Button, Menu, MenuButton, MenuList, MenuItem,  useDisclosure, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons';
import CartWidget from '../Cart/CartWidget';
import brand from '../../Assets/yerbamate.svg'
import avatar from '../../Assets/avatar.svg'
import { Link } from 'react-router-dom';



const NavLink = ({ children }) => (
  <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }} href={'#'}>
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <HStack spacing={8} alignItems={'center'}>
            <Flex>
            <Box px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }} >
             <Link to='/'>Patagonia store </Link> 
              </Box>
              <Box>
                
              <img src={brand} alt="logo" width='50px' height='50px' />
              
              </Box>
              </Flex>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link to={`category/bebidas`}>Bebidas</Link>
              <Link to={`category/dulces`}>Dulces</Link>
              <Link to={`category/ropa`}>Ropa</Link>
            </HStack>
          </HStack>

          <Flex alignItems={'center'} spacing={4}>
            <Box>
              <CartWidget/>
            </Box>
            
            <Box>
              <Menu>
                <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                  <Avatar size={'sm'} src={avatar} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Sign in</MenuItem>
                  <MenuItem>Register</MenuItem>
                </MenuList>
                  
              </Menu>
            </Box>

            <Box>
              <Button onClick={toggleColorMode}>
                <MoonIcon />
              </Button>
            </Box>
          </Flex>
        
         
        
        
        </Flex>    
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>


    </>
  );
}
