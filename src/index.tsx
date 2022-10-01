import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { HashRouter } from 'react-router-dom';

import Root from './pages/Root/Root';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <CssBaseline />
      <Root />
    </HashRouter>
  </React.StrictMode>
);
