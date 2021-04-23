import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';

import { Desktop } from './Desktop';
import { Mobile } from '../components/Mobile';


export default function App() {
  const [isDesktopMode] = useMediaQuery("(min-width: 480px)")

  return (
    <ChakraProvider>
      { isDesktopMode ? <Desktop /> : <Mobile /> }
    </ChakraProvider>
  );
}