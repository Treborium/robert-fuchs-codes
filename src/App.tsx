import { ChakraProvider, Image, Flex, Text, Icon, IconButton, Link, Divider } from '@chakra-ui/react';
import ProfilePicture from './resources/images/robert-and-tinka.jpg';
import { Linkedin, GitHub, Mail } from 'react-feather';

function App() {
  const fontColor = '#c7d5e0';
  const backgroundColor = '#171a21';
  const secondaryBackgroundColor = '#1b2838';
  const buttonVariant = 'unstyled';
  const iconSize = '4vw';

  return (
    <ChakraProvider>
      <Flex backgroundColor={backgroundColor} height='100vh' width='100vw'>
        <Flex paddingX='3vw' flexDirection='column' justifyContent='space-around' alignItems='stretch' width='100vw'>
          <Text fontSize='3vw' fontFamily='Bebas Neue' align='center' backgroundColor={secondaryBackgroundColor} color={fontColor} paddingY='1vh'>
            Robert Fuchs
          </Text>
          <Text fontSize='2.5vw' fontFamily='Coda' color={fontColor} align='center' paddingX='5vw'>
            Software Developer, Sports Enthusiast and Optimist
          </Text>
          <Flex flexDirection='row' justifyContent='space-evenly'>
            <IconButton
              variant={buttonVariant}
              boxSize={iconSize} 
              icon={<Icon as={Linkedin} boxSize={iconSize} strokeWidth='1px' />}
              aria-label="Open LinkedIn Profile"
              href='https://www.linkedin.com/in/robert-f-0b87a218a'
              as={Link}
              isExternal={true}
              color={fontColor}
            />
            <Divider orientation='vertical' />
            <IconButton
              variant={buttonVariant}
              boxSize={iconSize}
              icon={<Icon as={GitHub} boxSize={iconSize} strokeWidth='1px' />}
              aria-label="Open GitHub Profile"
              href='https://github.com/Treborium/robert-fuchs-codes'
              as={Link}
              isExternal={true}
              color={fontColor}
            />
            <Divider orientation='vertical'/>
            <IconButton
              variant={buttonVariant}
              boxSize={iconSize}
              icon={<Icon as={Mail} boxSize={iconSize} strokeWidth='1px' />}
              aria-label="Send E-Mail"
              href='mailto:robert@fuchs-mail.com'
              as={Link}
              isExternal={true}
              color={fontColor}
            />
          </Flex>
        </Flex>
        <Flex overflow='hidden'>
          <Image src={ProfilePicture} alt='Robert Fuchs with his dog' objectFit='contain' fit='fill'/>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App; 
