import React from 'react';
import { Grid, GridItem, Skeleton, useColorModeValue } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={6}
      autoRows="1fr"
      p={6}
    >
      {products.length > 0 ? (
        products.map((prod) => (
          <GridItem key={prod.nombre}>
            <Item {...prod} />
          </GridItem>
        ))
      ) : (
        // Display skeletons when products are being fetched
        Array.from({ length: 12 }).map((_, index) => (
          <GridItem key={index}>
            <Skeleton
              height="350px"
              bg={useColorModeValue('gray.200', 'gray.600')}
              borderRadius="lg"
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default ItemList;


