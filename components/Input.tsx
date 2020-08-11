import React, { forwardRef } from 'react';
import { Box, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core';

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
    <Box>
      <ChakraInput 
        name={name} 
        ref={ref}

        height="50px"
        backgroundColor="gray.800"
        focusBorderColor="purple.500"
        borderRadius="sm"
      
        {...rest}
      />
    </Box>
  );
}

export default forwardRef(Input);