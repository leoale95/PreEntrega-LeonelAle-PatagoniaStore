import React from 'react';
import { Box, Flex, Avatar, HStack, IconButton, Button, AvatarBadge, Menu, MenuButton, MenuList, MenuItem,  useDisclosure, useColorModeValue, Stack, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import CartWidget from '../Cart/CartWidget';


import { Link } from 'react-router-dom';

const Links = ['Todos los productos', 'Categories', ];

const NavLink = ({ children }) => (
  <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }} href={'/items'}>
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();



  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("teal.200", "teal.200"),
                }}
                bg={"teal"}
                fontSize="xl"  
                color={useColorModeValue("white", "white")} 
              >
                <Link to="/">Patagonia store </Link>
              </Box>
              
            </Flex>
            <Stack direction={"row"} spacing={1}>
              <Button colorScheme="teal" variant="outline" px={1} py={1} fontSize="sm" display={{ base: "none", md: "block" }}>
                <Link to={"/items"}>Todos los productos</Link>
              </Button>

              <Menu >
                <MenuButton as={Button} colorScheme="teal" variant="outline" fontSize="sm" display={{ base: "none", md: "block" }} >
                  Categorias
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/categorias/bebidas">Bebidas</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/category/dulces">Dulces</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/category/ropa">Ropa</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </HStack>

          <Flex alignItems={"center"} spacing={8}>
            <Box mr={4}>
              <CartWidget />
            </Box>

            <Box mr={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  
                >
                  <Avatar bg="teal.500" size={"sm"}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </MenuButton>
                <MenuList >
                  <MenuItem as={Link} to="/signup">
                    Sign up
                  </MenuItem>
                  <MenuItem as={Link} to="/login">
                    Login
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button onClick={toggleColorMode} ml={2} >
              {colorMode === 'light' ?  <SunIcon /> : <MoonIcon />}
              </Button>
            </Box>

            <Box></Box>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
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

