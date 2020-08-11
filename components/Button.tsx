import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/core';

interface ButtonProps extends ChakraButtonProps {
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ChakraButton 
      backgroundColor="purple.500" 
      _hover={{ backgroundColor: "purple.600" }} 
      height="50px" 
      borderRadius="sm" 
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}

export default Button;