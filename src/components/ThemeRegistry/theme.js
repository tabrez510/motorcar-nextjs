import { createTheme } from '@mui/material/styles';

export const fonts = {
  primary: "'Poppins', Arial, sans-serif",
  secondary: "'Gilroy', Arial, sans-serif",
};


const theme = createTheme({
   typography: {
    fontFamily: fonts.poppins
    },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

export default theme;
