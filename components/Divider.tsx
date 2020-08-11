import React from 'react';
import { Grid, Divider as ChakraDivider, BoxProps, GridProps } from '@chakra-ui/core';

interface DividerProps extends BoxProps {
  containerProps?: GridProps;
};

function Divider({ containerProps, ...rest }: DividerProps) {
  return (
    <Grid 
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.4}

      {...containerProps}
    >
      <ChakraDivider marginY={6} {...rest} />
      <ChakraDivider marginY={6} {...rest} />
    </Grid>
  );
}

export default Divider;