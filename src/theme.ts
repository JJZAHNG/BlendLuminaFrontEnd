import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Artistic blue
    },
    secondary: {
      main: '#ffb300', // Warm gold accent
    },
    background: {
      default: '#f5f7fa',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Roboto, Montserrat, Arial, sans-serif',
    h1: { fontFamily: 'Montserrat, Arial, sans-serif' },
    h2: { fontFamily: 'Montserrat, Arial, sans-serif' },
    h3: { fontFamily: 'Montserrat, Arial, sans-serif' },
    h4: { fontFamily: 'Montserrat, Arial, sans-serif' },
    h5: { fontFamily: 'Montserrat, Arial, sans-serif' },
    h6: { fontFamily: 'Montserrat, Arial, sans-serif' },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme; 