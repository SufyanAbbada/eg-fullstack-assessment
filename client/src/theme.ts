import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7e5f",
    },
    secondary: {
      main: "#feb47b",
    },
  },
  typography: {
    h1: { fontSize: "64px", fontFamily: "Dancing Script, cursive" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
