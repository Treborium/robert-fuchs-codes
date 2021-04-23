import { Flex, IconButton, Icon, Text, Divider, Link } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image';
import { Linkedin, GitHub, Mail } from "react-feather";
import { backgroundColor, secondaryBackgroundColor, fontColor, buttonVariant, iconSize } from "./Theme";

export const Desktop: React.FC = () => (
  <Flex backgroundColor={backgroundColor} height='100vh' width='100vw'>
        <Flex paddingX='3vw' flexDirection='column' justifyContent='space-around' alignItems='stretch'>

          <h1 style={{ textAlign: 'center', fontSize: '4rem', fontFamily: 'Baloo Chettan 2', backgroundColor: secondaryBackgroundColor, color: fontColor, paddingY: '1vh' }}>
            Robert Fuchs
          </h1>

          <Text fontSize='5xl' fontFamily='Baloo Chettan 2' color={fontColor} align='center' paddingX='5vw'>
            Software Developer, Sports Enthusiast and Optimist
          </Text>

          <Flex flexDirection='row' justifyContent='space-evenly' alignItems='center'>
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
            <Divider orientation='vertical' />
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

        <Flex overflow='hidden' flexDirection='row-reverse'>
          <Image src='/robert-and-tinka-large.jpg' alt='Robert Fuchs with his dog' height='1080' width='810px' />
        </Flex>
      </Flex>
);