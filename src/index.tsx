import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import App from './App';
import { queriClient } from './services/queryCLient';

ReactDOM.render(
  <QueryClientProvider client={queriClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
