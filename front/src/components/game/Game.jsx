import { Box, Button, Center } from '@chakra-ui/react';
import GameChart from './GameChart';
import { generateStockData } from './dataGenerator';

function Game() {
  const timeInterval = 'day';
  const data = generateStockData(timeInterval);

  return (
    <Box>
      <GameChart rawData={data} dataTimeInterval={timeInterval} />
      <Center mt='1rem'>
        <Button colorScheme='brand' ml='4.5rem'>Sell</Button>
      </Center>
    </Box>
  );
}

export default Game;