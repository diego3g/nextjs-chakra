import React from "react";

import {
  ColorModeProvider,
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
} from "@chakra-ui/core";

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import theme from "styles/theme";

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraThemeProvider theme={theme}>
    <ColorModeProvider value="dark">
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </EmotionThemeProvider>
    </ColorModeProvider>
  </ChakraThemeProvider>
);

export default ThemeContainer;