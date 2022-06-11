import { Box } from '@chakra-ui/react';
import EvolutionChart from './EvolutionChart';
import { generateStockData } from './dataGenerator';

function Game() {
  const timeInterval = 'day';
  const data = generateStockData(timeInterval);

  return (
    <Box>
      <EvolutionChart rawData={data} dataTimeInterval={timeInterval} />
    </Box>
  );
}

export default Game;