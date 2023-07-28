import React, { useState } from 'react';
import { Flex, Button, IconButton } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon, RepeatIcon } from '@chakra-ui/icons';

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
        setCounter(counter - 1);
       }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <Flex>
      <IconButton onClick={decrement} aria-label='Decrement count' icon={<TriangleDownIcon />} />
      <Button>{counter}</Button>
      <IconButton onClick={increment} aria-label='Increment count' icon={<TriangleUpIcon />} />
      <IconButton onClick={reset} aria-label='Increment count' icon={<RepeatIcon />} />
    </Flex>
  );
};

export default ItemCount;

