import { Box, ChakraProvider } from '@chakra-ui/react';

import Navigation from './Navigation';


export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <ChakraProvider>
      <Navigation />
      <Box width='100vw' height='100vh' backgroundColor='black'>
        {children}
      </Box>
    </ChakraProvider>
  );
};


const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    padding: 0,
    margin: 0,
  },
} as const;
