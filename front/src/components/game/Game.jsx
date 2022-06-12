import { Box, Button, Center } from '@chakra-ui/react';
import GameChart from './GameChart';
import { useEffect, useState } from 'react';

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
  const lastDate = rawData[rawData.length - 1].date;

  const [isSelling, setIsSelling] = useState(true);
  const [slicedData, setSlicedData] = useState([rawData.slice(0, 1)]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slicedData.length < rawData.length) {
        setSlicedData(rawData.slice(0, slicedData.length + 1));
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box>
      <GameChart rawData={slicedData} dataTimeInterval={dataTimeInterval}
                 lastDate={lastDate} />
      <Center mt='3'>
        <BuySellButton isSelling={isSelling} setIsSelling={setIsSelling} />
      </Center>
    </Box>
  );
}

export default Game;