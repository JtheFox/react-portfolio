import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({ 
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  fonts: {
    heading: '"Raleway", sans-serif',
    body: '"Roboto Slab", sans-serif'
  }
})

export default theme