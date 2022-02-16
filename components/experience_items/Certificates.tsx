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
} from '@chakra-ui/react';
import { FaCertificate } from 'react-icons/fa';
import { LabeledIconButton } from './LabeledIconButton';

export const Certficates: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LabeledIconButton icon={FaCertificate} label='Certificates' onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size='md'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Certificates</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display='flex' flexDirection='column' justifyContent='center'>
              <Image
                src={AWSCertifiedDeveloperAssociateBadge}
                objectFit='contain'
              />
              <Text align='center'>Issued on February 05, 2022</Text>
              <Text align='center'>Expires on February 05, 2025</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
