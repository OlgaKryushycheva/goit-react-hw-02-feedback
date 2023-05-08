import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import { GlobalStyle } from 'styles/GlibalStyle';
import { theme } from 'styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={GlobalStyle} />
    </ThemeProvider>
  </React.StrictMode>
);
