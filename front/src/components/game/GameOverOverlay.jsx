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
import IconLabel from '../IconLabel';
import { SiIntel } from 'react-icons/all';
import PlayingHistoryButton from '../playing-history/PlayingHistoryButton';
import LeaderboardButton from '../leaderboard/LeaderboardButton';

function GameOverOverlay({ userInvestment, buyAndHoldInvestment }) {
  const userVsHoldPercentDiff = ((userInvestment - buyAndHoldInvestment) /
    buyAndHoldInvestment * 100);
  const didBeatTheMarket = userInvestment > buyAndHoldInvestment;
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
            You just played the <BoldText>stock market</BoldText> from{' '}
            <BoldText>May 12, 1995</BoldText> through <BoldText>May 11,
            2005</BoldText>
          </ListItem>
          <ListItem fontSize='lg' {...listItemProps}>
            The stock being played was <BoldText>
            <IconLabel icon={<SiIntel />} label='Intel' />
          </BoldText>
          </ListItem>
          <ListItem fontSize='lg' {...listItemProps}>
            Your investment grew to{' '}
            <BoldText>{MONEY_FORMATTER.format(userInvestment)}</BoldText>{' '}
            while the Buy and Hold strategy netted{' '}
            <BoldText>{MONEY_FORMATTER.format(buyAndHoldInvestment)}</BoldText>
          </ListItem>
          <ListItem fontSize='lg' {...listItemProps}>
            You <BoldText>{didBeatTheMarket ? 'WON' : 'LOST'}</BoldText> to the
            market by{' '}
            <BoldText>{MONEY_FORMATTER.format(
              Math.abs(userInvestment - buyAndHoldInvestment))}</BoldText>{' '}
            (<BoldText>
            {didBeatTheMarket ? '+' : '-'}{
            (Math.abs(userVsHoldPercentDiff)).toFixed(2)}%
          </BoldText>)
          </ListItem>
        </UnorderedList>
        <Button colorScheme='brand' mt={8} size='lg'>Back to menu</Button>
        <Flex width='100%' gap={8} mt={8}>
          <PlayingHistoryButton />
          <LeaderboardButton />
        </Flex>
      </Flex>
    </Box>
  );
}

export default GameOverOverlay;