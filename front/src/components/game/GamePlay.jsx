import {
  Box,
  Button,
  Center,
  Flex,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import GameChart from './GameChart';
import { useEffect, useState } from 'react';
import { MONEY_FORMATTER } from '../../utils/constants';

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
            onClick={onClick} size='lg'>
      {buttonText}
    </Button>
  );
}

function MoneyStats(props) {
  const { buyAndHoldInvestment, userInvestment } = props;

  const userVsHoldPercentDiff = ((userInvestment - buyAndHoldInvestment) /
    buyAndHoldInvestment * 100);

  return (
    <StatGroup width='24rem' mt='6' ml='5rem'>
      <Stat>
        <StatLabel>Buy and Hold</StatLabel>
        <StatNumber color='blue.400'>
          {MONEY_FORMATTER.format(buyAndHoldInvestment)}
        </StatNumber>
      </Stat>

      <Stat>
        <StatLabel>Your investment</StatLabel>
        <StatNumber color='brand.400'>
          {MONEY_FORMATTER.format(userInvestment)}
        </StatNumber>
        <StatHelpText>
          <StatArrow
            type={(userVsHoldPercentDiff >= 0) ? 'increase' : 'decrease'}
          />
          {Math.abs(userVsHoldPercentDiff).toFixed(2)}%
        </StatHelpText>
      </Stat>
    </StatGroup>
  );

}

function GamePlay(
  {
    gameOptions, setIsPlaying, setIsGameOver,
    userInvestment, setUserInvestment,
    buyAndHoldInvestment, setBuyAndHoldInvestment,
  },
) {
  const { rawData, dataTimeInterval } = gameOptions;
  const lastDate = rawData[rawData.length - 1].date;

  const [isInvested, setIsInvested] = useState(true);
  const [slicedData, setSlicedData] = useState(rawData.slice(0, 1));
  const [investmentData, setInvestmentData] = useState(rawData.slice(0, 1));

  // Data to continuously add (for Buy and Hold and for investment)
  useEffect(() => {
    const interval = setInterval(() => {
      // No more data to add, the end of the game was reached
      if (slicedData.length === rawData.length) {
        setIsPlaying(false);
        setIsGameOver(true);
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
  setBuyAndHoldInvestment(START_MONEY + START_MONEY *
    buyAndHoldPercentageGain);

  const userPercentageGain = (investmentData.at(-1).price -
    investmentData.at(0).price) / investmentData.at(0).price;
  setUserInvestment(START_MONEY + START_MONEY * userPercentageGain);

  return (
    <Box>
      <GameChart
        rawPriceData={slicedData} rawInvestmentData={investmentData}
        dataTimeInterval={dataTimeInterval} lastDate={lastDate}
      />
      <Center mt='6' ml='4.7rem'>
        <Flex direction='column' alignItems='center'>
          <BuySellButton isInvested={isInvested}
                         setIsInvested={setIsInvested} />
          <MoneyStats buyAndHoldInvestment={buyAndHoldInvestment}
                      userInvestment={userInvestment} />
        </Flex>
      </Center>
    </Box>
  );
}

export default GamePlay;