import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';
import Button from './components/button';
import fonts from './fonts';

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
  },
  styles: {
    global: (props) => ({
      body: {
        // Make the background color a light gray
        bg: mode('gray.50', null)(props),
      },
    }),
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default customTheme;
