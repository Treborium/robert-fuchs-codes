import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react';

// import { Avatar, Box, Grid, Typography } from '@mui/material';

export default function Home() {
  const avatarBreakpoints = ['60vw', '50vw', '40vw', '25vw']

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Avatar
        name='Robert Fuchs'
        src='/avatar.svg'
        width={avatarBreakpoints}
        height={avatarBreakpoints}
        backgroundColor='white'
        mb={['10vh', '5vh']}
      />
      <Text fontSize={['4xl', '5xl', '6xl']} color='white'>Robert Fuchs</Text>
    </Box>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
  },
  avatar: {
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
  },
} as const;
