import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import 'typeface-manrope'
import LocationProvider from './LocationProvider';
import { Router } from "@reach/router"
import Stores from './Stores';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LocationProvider>
        <Router>
          <App path="/" />
          <Stores path="/stores" />
        </Router>
      </LocationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
