// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter> {/* 👈 Wrap App here */}
    <CartProvider>
      <App />
    </CartProvider>
  </HashRouter>
);
