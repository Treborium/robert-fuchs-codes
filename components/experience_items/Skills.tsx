import Image from 'next/image';

import AWSCertifiedDeveloperAssociateBadge from '../../public/aws-certified-developer-associate.png';
import {
  Box,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { BiCode } from 'react-icons/bi';
import { LabeledIconButton } from './LabeledIconButton';
import Skill from '../Skill';

export const Skills: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LabeledIconButton icon={BiCode} label='Skills' onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size='md'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Certificates</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingX='2vw' paddingY='3vh'>
            <Stack spacing={5}>
              <Skill label='NodeJs' value={100} {...styles.skill} />
              <Skill label='TypeScript' value={100} {...styles.skill} />
              <Skill label='React' value={90} {...styles.skill} />
              <Skill label='AWS' value={70} {...styles.skill} />
              <Skill label='Python' value={80} {...styles.skill} />
              <Skill label='Java' value={90} {...styles.skill} />
              <Skill label='React Native' value={60} {...styles.skill} />
              <Skill label='Git' value={100} {...styles.skill} />
              <Skill label='Bash' value={80} {...styles.skill} />
              <Skill label='C++' value={60} {...styles.skill} />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const styles = {
  content: {
    padding: '5vh 5vw',
  },
  skill: {
    marginBottom: '2vh',
  },
};
