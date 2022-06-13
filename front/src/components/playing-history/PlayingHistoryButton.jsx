import { Button, Text } from '@chakra-ui/react';
import { MdHistory } from 'react-icons/all';

function PlayingHistoryButton() {
  return (
    <Button width='100%' size='lg' colorScheme='brand' variant='outline'>
      <MdHistory size={28} />
      <Text ml={1}>My plays</Text>
    </Button>
  );
}

export default PlayingHistoryButton;