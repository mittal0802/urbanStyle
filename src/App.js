import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import CheckOut from './routes/checkout/checkout.component';
import { Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';
import PaymentForm from './routes/payment-form/payment-form.component';
import PastOrdersPage from './routes/past-orders-page/past-orders-page.component';


function App() {
  return (
     <Fragment>
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="payment" element={<PaymentForm />} />
        <Route path="orders" element={<PastOrdersPage />} />
      </Route>
    </Routes>
   </Fragment>
  );
}

export default App;
