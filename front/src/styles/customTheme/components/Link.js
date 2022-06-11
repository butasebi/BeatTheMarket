import { mode } from '@chakra-ui/theme-tools';

const Link = {
  baseStyle: (props) => ({
    color: mode('brand.600', 'brand.200')(props),
  }),
};

export default Link;