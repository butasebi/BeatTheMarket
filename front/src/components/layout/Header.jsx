import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';
import RegisterForm from '../forms/RegisterForm';

function Header() {
  return (
    <Box>
      <Flex as='header' align='center' padding='8'>
        <Heading as='h1' size='md'>
          <Link href='/'>Beat the Market</Link>
          <RegisterForm />
        </Heading>
        <Flex marginLeft='auto'>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;