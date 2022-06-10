import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import customTheme from './styles/customTheme';
import './styles/globals.css';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
