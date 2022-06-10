import { Flex, Link, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex as='footer' width='full' align='center' padding='8' marginTop='auto'>
      <Text>
        © {new Date().getFullYear()} -{' '}
        <Link href='/'>Beat the Market</Link>
      </Text>
    </Flex>
  );
}

export default Footer;