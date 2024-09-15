import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: true;
    md: true;
    lg: true;
    xl: false;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 400,
      md: 900,
      lg: 1280,
    },
  },
});

export default theme;
