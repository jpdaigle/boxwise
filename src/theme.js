import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        border: 0,
        minWidth: 100,
        marginRight: 5
      }
    }
  },
  typography: {
    fontFamily: "Open Sans",
    headline: {
      fontFamily: "Open Sans",
      fontWeight: 700
    },
    button: {
      fontFamily: "Open Sans",
      fontWeight: 700
    },
    title: {
      fontFamily: "Open Sans"
    },
    subheading: {
      fontFamily: "Open Sans"
    }
  },
  palette: {
    primary: {
      light: "#60ccff",
      main: "#009bd9",
      dark: "#006da7",
      contrastText: "#fff"
    },
    secondary: {
      light: "#60ccff",
      main: "#009bd9",
      dark: "#006da7",
      contrastText: "#fff"
    }
  }
});

export default theme;
