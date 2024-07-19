// Path: ProjetoEscolha/frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/ProjetoEscolha"> {/* Certifique-se de que o basename está correto */}
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
