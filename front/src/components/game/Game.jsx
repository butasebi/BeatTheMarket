import { Box, Button, Center, Flex, Stack, Text } from '@chakra-ui/react';
import GameChart from './GameChart';
import { useEffect, useState } from 'react';

const START_MONEY = 10000;

function BuySellButton(props) {
  const { isInvested, setIsInvested } = props;

  const buttonText = isInvested ? 'Sell' : 'Buy';
  const variant = isInvested ? 'outline' : 'solid';
  const onClick = () => {
    setIsInvested(!isInvested);
  };

  return (
    <Button colorScheme='brand' width='14rem' variant={variant}
            onClick={onClick}>
      {buttonText}
    </Button>
  );
}

function MoneyStats(props) {
  const { buyAndHoldInvestment, userInvestment } = props;
  return (
    <Flex direction='column'>
      <Flex justifyContent='space-between' gap='2'>
        <Text display='inline'>Buy and Hold: </Text>
        <Text display='inline' variant='monospace' color='blue.400'
              fontWeight='800' fontSize='lg' minWidth='5em' align='right'>
          ${buyAndHoldInvestment.toFixed(2)}
        </Text>
      </Flex>
      <Flex justifyContent='space-between' gap='2'>
        <Text display='inline'>Your investment: </Text>
        <Text display='inline' variant='monospace' color='brand.400'
              fontWeight='800' fontSize='lg' minWidth='5em' align='right'>
          ${userInvestment.toFixed(2)}
        </Text>
      </Flex>
    </Flex>
  );

}

function Game(props) {
  const { rawData, dataTimeInterval } = props;
  const lastDate = rawData[rawData.length - 1].date;

  const [isInvested, setIsInvested] = useState(true);
  const [slicedData, setSlicedData] = useState(rawData.slice(0, 1));
  const [investmentData, setInvestmentData] = useState(rawData.slice(0, 1));

  // Data to continuously add (for Buy and Hold and for investment)
  useEffect(() => {
    const interval = setInterval(() => {
      if (slicedData.length === rawData.length) {
        return;
      }

      const newRawData = rawData.slice(0, slicedData.length + 1);
      setSlicedData(newRawData);

      const newInvestmentData = investmentData.slice(0);
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
      }
      setInvestmentData(newInvestmentData);

    }, 200);
    return () => {
      clearInterval(interval);
    };
  });

  const buyAndHoldPercentageGain = (slicedData.at(-1).price -
    slicedData.at(0).price) / slicedData.at(0).price;
  const buyAndHoldInvestment = START_MONEY + START_MONEY *
    buyAndHoldPercentageGain;

  const userPercentageGain = (investmentData.at(-1).price -
    investmentData.at(0).price) / investmentData.at(0).price;
  const userInvestment = START_MONEY + START_MONEY * userPercentageGain;

  return (
    <Box>
      <GameChart
        rawPriceData={slicedData} rawInvestmentData={investmentData}
        dataTimeInterval={dataTimeInterval} lastDate={lastDate}
      />
      <Center mt='3' ml='4.7rem'>
        <Stack alignItems='center'>
          <BuySellButton isInvested={isInvested}
                         setIsInvested={setIsInvested} />
          <MoneyStats buyAndHoldInvestment={buyAndHoldInvestment}
                      userInvestment={userInvestment} />
        </Stack>
      </Center>
    </Box>
  );
}

export default Game;