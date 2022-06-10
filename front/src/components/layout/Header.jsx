import { Box, Flex, Heading, Link, Button } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';

function Header() {
  return (
    <Box>
      <Flex as='header' align='center' padding='8'>
        <Heading as='h1' size='md'>
          <Link href='/'>Beat the Market</Link>
          {/* <Button></Button> */}
          <RegisterForm />
          <LoginForm />
        </Heading>
        <Flex marginLeft='auto'>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;