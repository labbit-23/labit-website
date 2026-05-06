"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1B222A",
      },
    },
  },
});

export default function ChakraProviderClient({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
