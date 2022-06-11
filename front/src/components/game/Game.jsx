import { Box } from '@chakra-ui/react';
import GameChart from './GameChart';
import { generateStockData } from './dataGenerator';

function Game() {
  const timeInterval = 'day';
  const data = generateStockData(timeInterval);

  return (
    <Box>
      <GameChart rawData={data} dataTimeInterval={timeInterval} />
    </Box>
  );
}

export default Game;