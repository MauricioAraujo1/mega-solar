import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes';
import { GlobalStyles } from './ui/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
