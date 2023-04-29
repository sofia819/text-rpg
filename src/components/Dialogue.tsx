import {
  Button,
  ButtonGroup,
  Text,
  Box,
  Center,
  VStack,
  Image,
  AspectRatio,
  Flex,
  HStack,
} from '@chakra-ui/react';

export type Option = {
  option: string;
  sectionNumber: number;
};

interface DialogueProps {
  text: string;
  options: Option[];
  handleOptionClick: (section: number) => void;
  isStoryEnded: boolean;
  hasPreviousDialogue: boolean;
  handlePreviousDialogue: () => void;
  handleNextDialogue: () => void;
  handleStoryEnding: () => void;
}

const Dialogue = ({
  text,
  options,
  handleOptionClick,
  isStoryEnded,
  hasPreviousDialogue,
  handlePreviousDialogue,
  handleNextDialogue,
  handleStoryEnding,
}: DialogueProps) => {
  return (
    <VStack height="100%" spacing="1em">
      <Flex height="50%" width="90%" padding="10px" justify="center">
        <Image src="/story/placeholder.jpg" />
      </Flex>
      <Flex height="20%" align="center">
        <Text align="center">{text}</Text>
      </Flex>
      <Flex height="30%">
        <Center>
          {options?.length > 0 && (
            <ButtonGroup>
              <VStack spacing="1em">
                {options.map((option) => {
                  return (
                    <Button
                      onClick={() => handleOptionClick(option.sectionNumber)}
                    >
                      {option.option}
                    </Button>
                  );
                })}
              </VStack>
            </ButtonGroup>
          )}
          {!isStoryEnded && options?.length === 0 && (
            <Center>
              <HStack spacing="1em">
                <Button
                  onClick={handlePreviousDialogue}
                  isDisabled={!hasPreviousDialogue}
                >
                  Back
                </Button>
                <Button onClick={handleNextDialogue}>Next</Button>
              </HStack>
            </Center>
          )}
          {isStoryEnded && <Button onClick={handleStoryEnding}>End</Button>}
        </Center>
      </Flex>
    </VStack>
  );
};

export default Dialogue;
