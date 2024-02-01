import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <CartContextProvider>
      
      <FavoritesProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </FavoritesProvider>

    </CartContextProvider>
  </QueryClientProvider>


);
