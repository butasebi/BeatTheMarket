import { Box, Button, Center } from '@chakra-ui/react';
import GameChart from './GameChart';
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

function Game(props) {
  const { rawData, dataTimeInterval } = props;
  const [isSelling, setIsSelling] = useState(true);

  return (
    <Box>
      <GameChart rawData={rawData} dataTimeInterval={dataTimeInterval} />
      <Center mt='3'>
        <BuySellButton isSelling={isSelling} setIsSelling={setIsSelling} />
      </Center>
    </Box>
  );
}

export default Game;