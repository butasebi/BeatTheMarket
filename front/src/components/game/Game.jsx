import { Box, Button, Center } from '@chakra-ui/react';
import GameChart from './GameChart';
import { useEffect, useState } from 'react';

function BuySellButton(props) {
  const { isInvested, setIsInvested } = props;

  const buttonText = isInvested ? 'Sell' : 'Buy';
  const variant = isInvested ? 'outline' : 'solid';
  const onClick = () => {
    setIsInvested(!isInvested);
  };

  return (
    <Button colorScheme='brand' width='14rem' ml='4.7rem' variant={variant}
            onClick={onClick}>
      {buttonText}
    </Button>
  );
}

function Game(props) {
  const { rawData, dataTimeInterval } = props;
  const lastDate = rawData[rawData.length - 1].date;

  const [isInvested, setIsInvested] = useState(true);
  const [slicedData, setSlicedData] = useState([rawData.slice(0, 1)]);
  const [investmentData, setInvestmentData] = useState(rawData.slice(0, 1));

  // Data to continuously add (for Buy and Hold and for investment)
  useEffect(() => {
    const interval = setInterval(() => {
      if (slicedData.length === rawData.length) {
        return;
      }

      const newRawData = rawData.slice(0, slicedData.length + 1);
      setSlicedData(newRawData);

      const newInvestmentData = investmentData.slice();
      if (isInvested) {
        const pricePercentageChange = (newRawData.at(-1).price -
          newRawData.at(-2).price) / newRawData.at(-2).price;
        const newDatapoint = {
          price: newInvestmentData.at(-1).price +
            newInvestmentData.at(-1).price * pricePercentageChange,
          date: newRawData.at(-1).date,
        };
        newInvestmentData.push(newDatapoint);
      } else {
        const newDatapoint = {
          price: newInvestmentData.at(-1).price,
          date: newRawData.at(-1).date,
        };
        newInvestmentData.push(newDatapoint);
        console.log(newDatapoint);
      }
      console.log(newInvestmentData);
      setInvestmentData(newInvestmentData);

    }, 200);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box>
      <GameChart
        rawPriceData={slicedData} rawInvestmentData={investmentData}
        dataTimeInterval={dataTimeInterval} lastDate={lastDate}
      />
      <Center mt='3'>
        <BuySellButton isInvested={isInvested} setIsInvested={setIsInvested} />
      </Center>
    </Box>
  );
}

export default Game;