import Header from './Header';
import { Box, Flex } from '@chakra-ui/react';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Flex direction='column' height='100vh'>
      <Header />
      <Box as='main' marginY={22} paddingX='8'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;