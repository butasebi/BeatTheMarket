/** extend additional color here */
const extendedColors = {
  brand: {
    50: '#EFFCF6',
    100: '#EFFCF6',
    200: '#C6F7E2',
    300: '#8EEDC7',
    400: '#65D6AD',
    500: '#3EBD93',
    600: '#27AB83',
    700: '#199473',
    800: '#147D64',
    900: '#0C6B58',
    1000: '#014D40',
  },
};

/** override chakra colors here */
const overridenChakraColors = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
