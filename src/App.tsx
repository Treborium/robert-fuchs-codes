import { ChakraProvider, Image, Flex, Text, Icon, IconButton, Link } from '@chakra-ui/react';
import ProfilePicture from './resources/images/robert-and-tinka.jpg';
import { Linkedin, GitHub, Mail } from 'react-feather';

function App() {
  const fontColor = '#c7d5e0';
  const backgroundColor = '#171a21';
  const buttonVariant = 'unstyled';

  return (
    <ChakraProvider>
      <Flex backgroundColor={backgroundColor}>
        <Flex width='60vw' paddingX='3vw' flexDirection='column' justifyContent='space-around'>
          <Text fontSize='5xl' fontFamily='Bebas Neue' align='center' backgroundColor='#1b2838' color={fontColor} paddingY='1vh'>
            Robert Fuchs
          </Text>
          <Text fontSize='6xl' fontFamily='Bebas Neue' color={fontColor} align='center' paddingX='5vw'>
            Software Developer, Sports Enthusiast and Optimist
          </Text>
          <Flex flexDirection='row' justifyContent='space-evenly'>
            <IconButton
              variant={buttonVariant}
              boxSize='5em' 
              icon={<Icon as={Linkedin} boxSize='5em' />}
              aria-label="Open LinkedIn Profile"
              href='https://www.linkedin.com/in/robert-f-0b87a218a'
              as={Link}
              isExternal={true}
              color={fontColor}
            />
            <IconButton
              variant={buttonVariant}
              boxSize='5em'
              icon={<Icon as={GitHub} boxSize='5em' />}
              aria-label="Open GitHub Profile"
              href='https://github.com/Treborium/robert-fuchs-codes'
              as={Link}
              isExternal={true}
              color={fontColor}
            />
            <IconButton
              variant={buttonVariant}
              boxSize='5em'
              icon={<Icon as={Mail} boxSize='5em' />}
              aria-label="Send E-Mail"
              href='mailto:robert@fuchs-mail.com'
              as={Link}
              isExternal={true}
              color={fontColor}
            />
          </Flex>
        </Flex>
        <Flex width='40vw' alignItems='center' justifyContent='center' overflow='hidden'>
          <Image src={ProfilePicture} alt='Robert Fuchs with his dog' height='100vh' objectFit='contain' fit='fill'/>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
