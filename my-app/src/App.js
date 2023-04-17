import './App.css';
import React from "react";
import MainRouter from "./commom/router";
import theme from "./commom/themes/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import '@fortawesome/fontawesome-free/css/all.css'
function App() {
   return(
       <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainRouter/>
       </ThemeProvider>
   )
}

export default App;
