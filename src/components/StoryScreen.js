import { useState } from 'react';
import { Center, Button, VStack } from '@chakra-ui/react';
import Dialogue from './Dialogue';
import GameStates from '../utils/GameStates';

const StoryScreen = ({ story, setGameState }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(1);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const sections = {};

  story.forEach((section) => {
    sections[section.section] = section.content;
  });

  const handleDialogueClick = () => {
    if (currentDialogueIndex + 1 < sections[currentSectionIndex].length) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const handleOptionClick = (optionSection) => {
    setCurrentDialogueIndex(0);
    setCurrentSectionIndex(optionSection);
  };

  const handleStoryEnding = () => {
    setGameState(GameStates.END);
    setCurrentSectionIndex(0);
    setCurrentDialogueIndex(0);
  };

  const isOnLastDialogue =
    currentDialogueIndex === sections[currentSectionIndex].length - 1;

  const currentDialogue = sections[currentSectionIndex][currentDialogueIndex];

  const isStoryEnded =
    isOnLastDialogue && currentDialogue.options?.length === 0;

  return (
    <Center onClick={handleDialogueClick}>
      <VStack spacing="1em">
        <Dialogue
          text={currentDialogue.text}
          options={currentDialogue.options}
          handleDialogueClick={handleDialogueClick}
          handleOptionClick={handleOptionClick}
        />
        {isStoryEnded && <Button onClick={handleStoryEnding}>End</Button>}
      </VStack>
    </Center>
  );
};

export default StoryScreen;
