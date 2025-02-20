import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0154AA",
      light: "#737A91",
      // dark: "#1565c0",
      // contrastText: "#fff",
    },
    secondary: {
      main: "#F6F9FF",
      light: "#E9ECEF",

    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#585D6E",
    },
  },
  typography: {
    fontFamily: '"Neue Haas Grotesk Display", sans-serif',
  },
});


