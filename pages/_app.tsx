import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { NavBar } from "../components/navbar";
import { mode } from "@chakra-ui/theme-tools";
import Head from "next/head";

const colors = {
  brand: {
    900: "#252525",
    800: "#3B3C3C",
    700: "#525353",
    600: "#68696A",
    500: "#7E8081",
    400: "#959797",
    300: "#ABAEAE",
    200: "#C1C4C5",
  },
};

export const theme = extendTheme({
  colors,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: () => ({
      body: {
        bg: mode("brand.200", "brand.700"),
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const NextComponent = Component as any;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="" />
        <title>Emmett.dev</title>
      </Head>
      <NavBar />
      <Box as="main" w="full" p="8" mt={{ base: "14", md: "4" }}>
        <NextComponent {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
