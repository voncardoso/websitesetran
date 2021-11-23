import { ChakraProvider } from '@chakra-ui/react';

import '../config/firebaseClient';
import 'firebase/firestore';

import {theme} from '../styles/theme';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
