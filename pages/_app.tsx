import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { NavBar } from "../components/navbar";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#1a202c",
  },
};

export const theme = extendTheme({
  colors,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const NextComponent = Component as any;

  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box
        as="main"
        w="full"
        p="8"
        mt={{ base: "24", md: "14" }}
        ml={{ base: "0", md: "64" }}
      >
        <NextComponent {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
