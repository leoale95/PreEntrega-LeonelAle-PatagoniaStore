import React from 'react';
import { Flex, Circle, Box, Image, Badge, useColorModeValue, Icon, chakra, Tooltip } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={'top'}
            color={'gray.800'}
            fontSize={'1.2em'}
          >
            <chakra.a href={'#'} display={'flex'}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={rating} numReviews={numReviews} />
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              £
            </Box>
            {price.toFixed(2)}
          </Box>
        </Flex>
          <Box>
            <Link to={`/item/${id}`} > Ver Detalle </Link>
          </Box>
      </Box>
    </Box>
  );
};

export default Item;

