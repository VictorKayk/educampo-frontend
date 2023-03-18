import ReactDOM from 'react-dom/client';
import Router from './routes';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
