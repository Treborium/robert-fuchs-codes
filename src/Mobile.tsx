import { Flex, Avatar, IconButton, Icon, Divider, Text } from "@chakra-ui/react"
import React from "react"
import { Linkedin, Link, GitHub, Mail } from "react-feather"
import { backgroundColor, buttonVariant, fontColor, iconSize, secondaryBackgroundColor } from "./Theme"
import AvatarImage from './resources/images/avatar.svg';

export const Mobile: React.FC = () => (
  <Flex backgroundColor={backgroundColor} height='100vh' width='100vw' justifyContent='space-around' alignItems='stretch' paddingX='3vw' flexDirection='column'>
    <Avatar src={AvatarImage} size='2xl' backgroundColor='white' alignSelf='center' />

    <Text fontSize='3vw' fontFamily='Baloo Chettan 2' align='center' backgroundColor={secondaryBackgroundColor} color={fontColor} paddingY='1vh'>
      Robert Fuchs
    </Text>


    <Text fontSize='2.5vw' fontFamily='Baloo Chettan 2' color={fontColor} align='center' paddingX='5vw'>
      loper, Sports Enthusiast and Optimist
    </Text>

    <Flex flexDirection='row' justifyContent='space-evenly'>
      <IconButton
        variant={buttonVariant}
        boxSize={iconSize}
        icon={<Icon as={Linkedin} boxSize={iconSize} strokeWidth='1px' />}
        aria-label="Open LinkedIn Profile"
        href='https://www.linkedin.com/in/robert-f-0b87a218a'
        as={Link}
        // isExternal={true}
        color={fontColor} />
      <Divider orientation='vertical' />
      <IconButton
        variant={buttonVariant}
        boxSize={iconSize}
        icon={<Icon as={GitHub} boxSize={iconSize} strokeWidth='1px' />}
        aria-label="Open GitHub Profile"
        href='https://github.com/Treborium/robert-fuchs-codes'
        as={Link}
        // isExternal={true}
        color={fontColor} />
      <Divider orientation='vertical' />
      <IconButton
        variant={buttonVariant}
        boxSize={iconSize}
        icon={<Icon as={Mail} boxSize={iconSize} strokeWidth='1px' />}
        aria-label="Send E-Mail"
        href='mailto:robert@fuchs-mail.com'
        as={Link}
        // isExternal={true}
        color={fontColor} />
    </Flex>
  </Flex>
);