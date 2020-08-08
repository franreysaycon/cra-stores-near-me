import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import 'typeface-manrope'
import { Router } from "@reach/router"
import Stores from './Stores';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <App path="/" />
        <Stores path="/stores/:position" />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
