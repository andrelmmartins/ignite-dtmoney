import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './presentation/App';

import { TransactionProvider } from './contexts/TransactionContext';
import { startServer } from './mirage';

startServer()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>
);
