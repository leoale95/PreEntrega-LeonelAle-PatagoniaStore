import React, { useContext, useState } from "react";
import {  Box,  Container, Link,  Stack,  Text,  Image,  Flex,  VStack,  Button,  Heading,  SimpleGrid,  StackDivider,  useColorModeValue,  List,  ListItem,} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from '../Cart/ItemCount'
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ id, nombre, price, stock, img }) => {
  const [quantityAdded, setQuantityAdded] = useState (0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity)

    const item ={
      id, nombre, price
    }

    addItem(item, quantity)
  }


  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 10 }}
      >
        <Box>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={ img }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {nombre}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              USD {price}
            </Text>
          </Box>
          
          <Stack
            spacing={{ base: 3, sm: 5 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 3, sm: 5 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              
            </VStack>
             </Stack>
             
          

          <ItemCount stock={stock} addItem={handleOnAdd} />

              

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
         
        
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemDetail;