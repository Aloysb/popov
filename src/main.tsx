import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';

import worker from './mocks/browser';
import App from './App';
import theme from './theme';

const queryClient = new QueryClient();

if (import.meta.env.DEV) {
  worker.start().catch(() => {
    throw new Error('error starting MSW worker');
  });
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
