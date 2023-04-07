import { type CreditsContent } from './GameScreen';
import { Heading, Box, VStack, Button } from '@chakra-ui/react';

interface CreditsProps {
  credits: CreditsContent;
  setHasViewedCredits: React.Dispatch<React.SetStateAction<boolean>>;
}

const Credits = ({ credits, setHasViewedCredits }: CreditsProps) => {
  return (
    <Box>
      <VStack spacing="2em" maxWidth="50vw">
        <Heading size="lg">Credits</Heading>
        <Heading size="md">Creator: {credits.creator}</Heading>
        <Button onClick={() => setHasViewedCredits(true)}>Next</Button>
      </VStack>
    </Box>
  );
};

export default Credits;
