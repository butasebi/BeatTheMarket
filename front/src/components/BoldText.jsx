import { Text } from '@chakra-ui/react';

function BoldText({ children }) {
  return (
    <Text display='inline' fontWeight='600'>
      {children}
    </Text>
  );
}

export default BoldText;