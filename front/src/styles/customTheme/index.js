import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';
import fonts from './fonts';
import Link from './components/Link';
import Text from './components/Text';

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Link,
    Text,
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
