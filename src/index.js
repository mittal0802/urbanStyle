import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {UserProvider} from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import reportWebVitals from './reportWebVitals';
import { OrderProvider } from './contexts/orders.context';
import {stripePromise} from './utils/stripe/stripe.utils';
import {Elements} from '@stripe/react-stripe-js';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <OrderProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
            <App />
            </Elements>
          </CartProvider>
          </OrderProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
