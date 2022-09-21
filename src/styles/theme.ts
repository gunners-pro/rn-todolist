import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    product: {
      purple: '#8284fa',
      purpleDark: '#5e60ce',
      blue: '#4ea8de',
      blueDark: '#1e6f9f',
    },
    gray: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#808080',
      400: '#333333',
      500: '#262626',
      600: '#1a1a1a',
      700: '#0d0d0d',
    },
    danger: {
      500: '#e25858',
    },
  },
  fonts: {
    heading: 'Inter_700Bold',
    body: 'Inter_400Regular',
    mono: 'Inter_400Regular',
  },
});
