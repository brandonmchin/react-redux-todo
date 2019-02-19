import { colors } from '@material-ui/core';

const typography = {
  useNextVariants: true,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',')
}

export const themes = {
  default: {
    palette: {
      type: 'dark',
      primary: colors.green
    },
    typography
  }
}
