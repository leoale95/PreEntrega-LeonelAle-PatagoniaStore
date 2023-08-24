import React from 'react';
import { Flex, Circle, Box, Image, Badge, useColorModeValue, Icon, chakra, Tooltip, Button } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AddToCartButton from '../Cart/AddToCartButton';

const Item = ({ isNew, id,  nombre, price, rating, numReviews, img }) => {

  
  function Rating({ rating, numReviews }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '0.1em' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '0.1em' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '0.1em' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }

  return (
    <Box  // Estilos box
      bg={useColorModeValue('white', 'gray.800')}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {isNew && <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />}
         
      <Image src={img} alt={`Picture of ${nombre}`} roundedTop="lg" boxSize="550px" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {nombre}
          </Box>
          
          {/* <AddToCartButton id={id} /> */}
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={rating} numReviews={numReviews} />
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              USD
            </Box>
            {price.toFixed(2)}
          </Box>
        </Flex>
          
          <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              <Link to={`/item/${id}`} > Ver Detalle </Link>
            </Button>
      </Box>
    </Box>
  );
};

export default Item;