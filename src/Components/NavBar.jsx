import React from 'react'
import {Menu, MenuButton, Button, MenuItem, MenuList, Flex, Box, Spacer} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <Flex>
        <Box>
        Patagonia store
        </Box>
        <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categories
        </MenuButton>
        <MenuList>
          <MenuItem>Best seller</MenuItem>
          <MenuItem>Offers</MenuItem>
          <MenuItem>Specials</MenuItem>
          
        </MenuList>
      </Menu>
      <Spacer />
      <Box>
      <CartWidget/>
      </Box>
    </Flex>
  );
}

export default NavBar