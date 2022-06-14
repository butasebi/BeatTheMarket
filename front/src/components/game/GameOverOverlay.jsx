import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { MONEY_FORMATTER } from '../../utils/constants';
import BoldText from '../BoldText';
import PlayingHistory from '../playing-history/PlayingHistory';
import Leaderboard from '../leaderboard/Leaderboard';
import { format } from 'date-fns';

function BackToMenuButton({ setIsMainMenu, setIsGameOver }) {
  const handleClick = () => {
    console.log(setIsMainMenu, setIsGameOver);
    setIsMainMenu(true);
    setIsGameOver(false);
  };

  return (
    <Button colorScheme='brand' mt={8} size='lg' onClick={handleClick}>
      Back to menu
    </Button>
  );
}

function GameOverOverlay(
  {
    userInvestment, buyAndHoldInvestment, gameOptions,
    setIsGameOver, setIsMainMenu,
  },
) {
  const userVsHoldPercentDiff = ((userInvestment - buyAndHoldInvestment) /
    buyAndHoldInvestment * 100);
  const didBeatTheMarket = userInvestment > buyAndHoldInvestment;

  const FORMAT_A = 'MMM d, yyyy';
  const FORMAT_B = 'MMM d, yyyy H:mmaaaa';
  const formattedStartDate = (gameOptions.dataTimeInterval === 'minute') ?
    format(gameOptions.startDate, FORMAT_B) :
    format(gameOptions.startDate, FORMAT_A);
  const formattedEndDate = (gameOptions.dataTimeInterval === 'minute') ?
    format(gameOptions.endDate, FORMAT_B) :
    format(gameOptions.endDate, FORMAT_A);

  const listItemProps = { mt: 4 };

  return (
    <Box
      position='absolute' top='-5' bottom='-2' left='-2' right='-6'
      bg='alpha.300'
      backdropFilter='blur(10px)'
    >
      <Flex maxWidth='32rem' mx='auto' mt={12} direction='column'>
        <Heading>
          You {didBeatTheMarket ?
          <Text display='inline' color='brand.500'>BEAT</Text> :
          <Text display='inline' color='red.500'>DID NOT BEAT</Text>} the
          market! {didBeatTheMarket ? ':D' : ':('}
        </Heading>
        <UnorderedList mt='6' gap='2' lineHeight={7}>
          <ListItem fontSize='lg'>
            You just played{' '}
            the <BoldText>{gameOptions.datasetCategory} market</BoldText> from{' '}
            <BoldText>{formattedStartDate}</BoldText> through <BoldText>{formattedEndDate}</BoldText>
          </ListItem>
          <ListItem fontSize='lg' {...listItemProps}>
            The {gameOptions.datasetCategory} being played was <BoldText
            position='relative' top={1}>
            {gameOptions.datasetOption.label}
          </BoldText>
          </ListItem>
          <ListItem fontSize='lg' {...listItemProps}>
            Your investment grew to{' '}
            <BoldText>{MONEY_FORMATTER.format(userInvestment)}</BoldText>{', '}
            while the Buy and Hold strategy netted{' '}
            <BoldText>{MONEY_FORMATTER.format(buyAndHoldInvestment)}</BoldText>
          </ListItem>
          <ListItem fontSize='lg' {...listItemProps}>
            You {(didBeatTheMarket ? <BoldText>BEAT</BoldText> :
            <BoldText>LOST</BoldText>)}{!didBeatTheMarket ? ' to' : ''} the
            market by{' '}
            <BoldText>{MONEY_FORMATTER.format(
              Math.abs(userInvestment - buyAndHoldInvestment))}</BoldText>{' '}
            (<BoldText>
            {didBeatTheMarket ? '+' : '-'}{
            (Math.abs(userVsHoldPercentDiff)).toFixed(2)}%
          </BoldText>)
          </ListItem>
        </UnorderedList>
        <BackToMenuButton
          setIsMainMenu={setIsMainMenu} setIsGameOver={setIsGameOver}
        />
        <Flex width='100%' gap={8} mt={8}>
          <PlayingHistory />
          <Leaderboard />
        </Flex>
      </Flex>
    </Box>
  );
}

export default GameOverOverlay;