import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { CartProvider } from "./contexts/cart.context";
import reportWebVitals from "./reportWebVitals";
import { OrderProvider } from "./contexts/orders.context";
import { stripePromise } from "./utils/stripe/stripe.utils";
import { Elements } from "@stripe/react-stripe-js";
import { store } from "./store/store";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <OrderProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        </OrderProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
