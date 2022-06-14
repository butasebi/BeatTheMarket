import { Text } from '@chakra-ui/react';

function BoldText({ children, ...otherProps }) {
  return (
    <Text display='inline' fontWeight='600' {...otherProps}>
      {children}
    </Text>
  );
}

export default BoldText;