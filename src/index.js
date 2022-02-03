import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import reportWebVitals from './reportWebVitals';
import configureStore from './services/redux/store/configureStore';

import App from './App';

import GlobalStyle from './assets/styles/js/global';
import { theme } from './assets/styles/js/theme';


const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();