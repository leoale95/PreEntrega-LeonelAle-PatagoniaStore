import React from 'react';
import Item from './Item';
import { Grid, GridItem } from '@chakra-ui/react';

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
      {products.map((prod) => (
        <GridItem key={prod.nombre}>
          <Item {...prod} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ItemList;

