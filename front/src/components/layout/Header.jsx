import { Box, Flex, Heading, Link, Spacer, Image, Button } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';

function LogoutButton() {
  function logOut() {
    localStorage.setItem('isLoggedIn', 'false')
    window.location.reload()
  }

  return (
      <><Button
      onClick={logOut}
      borderRadius={10}
      marginRight='1vh'
      colorScheme='brand'
    >
      Logout
    </Button>
    </>
  )
}

function Header() {
  return (
    <Box>
      <Flex as='header' align='center' padding='8' w='full'>
        <Image 
          boxSize='4vh'
          mr='1vh'
          objectFit='cover'
          src='https://i.im.ge/2022/06/14/rvqblh.png' 
          alt='logo' 
        />
        <Heading as='h1' size='md'>
          <Link href='/'>Beat the Market</Link>
        </Heading>
        <Spacer />
        {localStorage.getItem('isLoggedIn') === 'true' ? 
          <LogoutButton />
          :
          <>
          <LoginForm />
          <RegisterForm />
          </>
        }
        <Flex marginLeft='auto'>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;