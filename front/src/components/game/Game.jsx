import { Box, Button, Center } from '@chakra-ui/react';
import GameChart from './GameChart';
import { generateStockData } from './dataGenerator';
import { useState } from 'react';

function BuySellButton(props) {
  const { isSelling, setIsSelling } = props;

  const buttonText = isSelling ? 'Sell' : 'Buy';
  const variant = isSelling ? 'outline' : 'solid';
  const onClick = () => {
    setIsSelling(!isSelling);
  };

  return (
    <Button colorScheme='brand' width='4rem' ml='4.7rem' variant={variant}
            onClick={onClick}>
      {buttonText}
    </Button>
  );
}

function Game() {
  const [isSelling, setIsSelling] = useState(true);

  const timeInterval = 'day';
  const data = generateStockData(timeInterval);

  return (
    <Box>
      <GameChart rawData={data} dataTimeInterval={timeInterval} />
      <Center mt='3'>
        <BuySellButton isSelling={isSelling} setIsSelling={setIsSelling} />
      </Center>
    </Box>
  );
}

export default Game;