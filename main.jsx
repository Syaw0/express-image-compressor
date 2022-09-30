import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';
import ErrorBoundary from './src/component/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
