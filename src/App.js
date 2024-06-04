import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Title from "./components/Title";
import Intro from "./components/Intro";
import Abstract from "./components/Abstract";
import Demo from "./components/Demos";
import Prompts from "./components/Prompts";
import Failures from "./components/Failures";
import BibTeX from "./components/BibTeX";
import "./App.css";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  palette: {
    primary: {
      main: "#448aff",
      dark: "#536dfe",
    },
    // secondary: {
    //   main: '#ff9800',  // Change as per your need
    // },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            RoboTool
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Title />
      <Intro />
      <Abstract />
      <Demo />
      <Prompts />
      <Failures />
      <BibTeX />

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
