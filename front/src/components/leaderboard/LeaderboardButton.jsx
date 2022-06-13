import { Button, Text } from '@chakra-ui/react';
import { RiBarChartFill } from 'react-icons/all';

function LeaderboardButton() {
  return (
    <Button width='100%' size='lg' colorScheme='brand' variant='outline'>
      <RiBarChartFill size={24} />
      <Text ml={1}>Leaderboard</Text>
    </Button>
  );
}

export default LeaderboardButton;