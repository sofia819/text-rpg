import { useState } from 'react';
import { Center } from '@chakra-ui/react';
import Dialogue from './Dialogue';

const SectionPanel = ({ section, setCurrentSection }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const handleDialogueClick = () => {
    if (currentDialogueIndex + 1 < section.length) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const handleOptionClick = (optionSection) => {
    setCurrentDialogueIndex(0);
    setCurrentSection(optionSection);
  };

  const handleRestart = () => {
    setCurrentDialogueIndex(0);
    setCurrentSection(1);
  };

  const isOnLastDialogue = currentDialogueIndex === section.length - 1;

  const currentDialogue = section[currentDialogueIndex];
  return (
    <Center onClick={handleDialogueClick}>
      <Dialogue
        text={currentDialogue.text}
        options={currentDialogue.options}
        handleDialogueClick={handleDialogueClick}
        handleOptionClick={handleOptionClick}
        isOnLastDialogue={isOnLastDialogue}
        handleRestart={handleRestart}
      />
    </Center>
  );
};

export default SectionPanel;
