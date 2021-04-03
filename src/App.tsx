import { ChakraProvider, Image, Flex, Box, Text, Icon, IconButton, Link } from '@chakra-ui/react';
import ProfilePicture from './resources/images/robert-and-tinka.jpg';
import { Linkedin, GitHub, Mail } from 'react-feather';

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Flex paddingX='3vw' pt='10vh' flexDirection='column' justifyContent='space-around'>
          <Text fontSize='5xl' fontFamily='Bebas Neue' align='center' backgroundColor='#b0bec5' paddingY='1vh'>
            Robert Fuchs
          </Text>
          <Text fontSize='6xl' fontFamily='Bebas Neue' align='center' paddingX='5vw'>
            Software Developer, Sports Enthusiast and Optimist
          </Text>
          <Flex flexDirection='row' justifyContent='space-evenly'>
            <IconButton
              variant='ghost'
              boxSize='5em' 
              icon={<Icon as={Linkedin} boxSize='5em' />}
              aria-label="Open LinkedIn Profile"
              href='https://www.linkedin.com/in/robert-f-0b87a218a'
              as={Link}
              isExternal={true}
            />
            <IconButton
              variant='ghost'
              boxSize='5em'
              icon={<Icon as={GitHub} boxSize='5em' />}
              aria-label="Open GitHub Profile"
              href='https://github.com/Treborium/robert-fuchs-codes'
              as={Link}
              isExternal={true}
            />
            <IconButton
              variant='ghost'
              boxSize='5em'
              icon={<Icon as={Mail} boxSize='5em' />}
              aria-label="Send E-Mail"
              href='https://www.linkedin.com/in/robert-f-0b87a218a'
              as={Link}
              isExternal={true}
            />
          </Flex>
          <Text> </Text>
        </Flex>
        <Box>
          <Image src={ProfilePicture} alt='Robert Fuchs with his dog' height='100vh' width='auto' objectFit='cover' fit='fill'/>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
