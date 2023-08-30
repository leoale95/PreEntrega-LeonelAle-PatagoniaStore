import { Stack, Flex, Button, Text, VStack, useBreakpointValue, MenuButton, MenuList, MenuItem, Box, Menu } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CallToActionWithAnnotation() {
  return (
    <Flex w={"full"} h={"100vh"} justify={"center"} align={"center"}>
      <VStack spacing={8} alignItems="center">
        <Text
          fontWeight={600}
          fontSize={useBreakpointValue({ base: '2xl', sm: '4xl', md: '6xl' })}
          lineHeight={'110%'}
          textAlign={'center'}
        >
          Sentite como en casa <br />
          <Text as={'span'} color={'green.400'}>
            Patagonia Store
          </Text>
        </Text>
        <Text color={'gray.500'} textAlign={'center'}>
        Somos un mercado sudamericano donde puedes encontrar todos esos grandes sabores y diferentes productos que representan una cultura unica. 
        <br></br>
        Estamos orgullosos de llevar la auténtica cultura de América del Sur al resto del mundo.
        </Text>
        <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
          <Button as={Link} to="/items" colorScheme={'green'} bg={'green.400'} rounded={'full'} px={6} _hover={{ bg: 'green.500' }}>
          Todos los productos
          </Button>
         
          <Menu>
            <MenuButton as={Button} variant={'link'} colorScheme={'blue'} size={'sm'}>
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
      </VStack>
    </Flex>
  );
}
