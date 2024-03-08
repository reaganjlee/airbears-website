import { extendTheme } from '@chakra-ui/react';
import '@fontsource/rajdhani';
import '@fontsource/heebo';
import '@fontsource/josefin-sans';
import '@fontsource/poppins';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default theme;
