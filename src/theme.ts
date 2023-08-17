import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    bg: true;
    lg: true;
    xl: false;
  }
}

const BreakPointTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 600,
      bg: 900,
      lg: 1200
    }
  }
});

export { BreakPointTheme };