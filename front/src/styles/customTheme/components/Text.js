import { mode } from '@chakra-ui/theme-tools';

const Link = {
  variants: {
    'monospace': {
      fontFamily: '\'Inconsolata\', monospace',
    },
    'brand': (props) => ({
      color: mode('brand.600', 'brand.200')(props),
    }),
  },
};

export default Link;