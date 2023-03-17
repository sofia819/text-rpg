import {
  Button,
  ButtonGroup,
  Text,
  Box,
  Center,
  VStack,
} from '@chakra-ui/react';

const Dialogue = ({ text, options, handleOptionClick }) => {
  return (
    <Box>
      <VStack spacing="1em">
        <Box maxWidth="50vw">
          <Text align="center">{text}</Text>
        </Box>
        <Center>
          {options?.length > 0 && (
            <ButtonGroup>
              <VStack spacing="1em">
                {options.map((option) => {
                  return (
                    <Button onClick={() => handleOptionClick(option.section)}>
                      {option.option}
                    </Button>
                  );
                })}
              </VStack>
            </ButtonGroup>
          )}
        </Center>
      </VStack>
    </Box>
  );
};

export default Dialogue;
