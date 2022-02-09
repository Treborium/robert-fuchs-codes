import {
  LinkBox,
  Box,
  Text,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';
import { DiGitBranch } from 'react-icons/di';
import { IoMdSchool } from 'react-icons/io';
import { RiNumber1, RiNumber2 } from 'react-icons/ri';


export const Resume: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const items: TimelineItemModel[] = [
    {
      title: 'March 2022 - Present',
      cardTitle: 'Futurice',
      cardDetailedText: ['Senior Full Stack Engineer (March 2022 - Present)'],
    },
    {
      title: 'March 2017 - March 2022',
      cardTitle: 'GoTo Technologies (former LogMeIn)',
      cardDetailedText: [
        'Software Engineer (Aug 2020 - March 2022)',
        'Working Student (Aug 2017 - Aug 2020)',
        'Intern (March 2017 - Aug 2017)',
      ],
    },
    {
      title: 'Sep 2016 - Jul 2020',
      cardTitle: 'Karlsruhe University of Applied Science',
      cardDetailedText: [
        'Bachelor of Applied Science – BASc, Computer Science',
      ],
    },
  ];

  return (
    <>
      <LinkBox as='button' onClick={onOpen}>
        <Box>
          <Icon
            as={DiGitBranch}
            width={['5vw']}
            height={['5vw']}
            color='white'
          />
          <Text color='white'>Resume</Text>
        </Box>
      </LinkBox>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Certificates</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chrono
              items={items}
              mode='VERTICAL_ALTERNATING'
              cardWidth={400}
              useReadMore={false}
              hideControls
              disableClickOnCircle
              theme={{ primary: 'black', secondary: '', titleColor: 'black' }}
            >
              <div className='chrono-icons'>
                <Icon as={RiNumber2} />
                <Icon as={RiNumber1} />
                <Icon as={IoMdSchool} />
              </div>
            </Chrono>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
