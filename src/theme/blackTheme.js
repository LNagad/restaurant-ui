import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const blackTheme = createTheme({
  palette: {
    primary: {
      main: '#141414'
    },
    secondary: {
      main: '#FEFEFF'
    },
    listItems: {
      main: '#C0C0C0'
    },
    reviewStar: {
      main: '#fcc203'
    },
    error: {
      main: red.A400
    }
  }
});
