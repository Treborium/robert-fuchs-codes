import { Desktop } from '../components/Desktop';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';


export default function HomePage() {
  return (
    <ChakraProvider>
      <Desktop />
    </ChakraProvider>
  );
}
