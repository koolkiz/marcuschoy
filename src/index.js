import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

// Define a custom theme if needed
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f7fafc', // Light background color
        color: '#2D3748', // Dark text color
      },
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
