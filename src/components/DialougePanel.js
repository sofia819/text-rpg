import { useState } from 'react';
import { Flex, Card, Center, Box } from '@chakra-ui/react';
import SectionPanel from './SectionPanel';

const DialoguePanel = ({ story }) => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = {};

  story.forEach((section) => {
    sections[section.section] = section.content;
  });

  return (
    <Box w="100vw" h="100vh">
      <Center width="100vw" height="100vh">
        <Card variant="outline" width="70vw" height="70vh">
          <Flex
            width="100%"
            height="100%"
            alignContent="center"
            justifyContent="center"
          >
            <SectionPanel
              section={sections[currentSection]}
              setCurrentSection={setCurrentSection}
            />
          </Flex>
        </Card>
      </Center>
    </Box>
  );
};

export default DialoguePanel;
