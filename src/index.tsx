import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';

import Root from './pages/Root/Root';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Root />
  </React.StrictMode>
);
