import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';

function Header() {
  return (
    <Box>
      <Flex as='header' align='center' padding='8' w='full'>
        <Heading as='h1' size='md'>
          <Link href='/'>Beat the Market</Link>
        </Heading>
        <Spacer />
        <LoginForm />
        <RegisterForm />
        <Flex marginLeft='auto'>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;