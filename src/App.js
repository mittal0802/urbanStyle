import { useEffect, lazy, Suspense, Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { getCategoriesAndCollections } from "./utils/firebase/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action";
import { setCategories } from "./store/categories/categories.action";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./components/footer/footer.component.jsx";
import Loader from "./components/additional-components/loader/loader.component.jsx";
import ErrorFallBack from "./components/additional-components/errorFallback/errorfallback.component.jsx";

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"));
const PaymentForm = lazy(() =>
  import("./routes/payment-form/payment-form.component")
);
const PastOrdersPage = lazy(() =>
  import("./routes/past-orders-page/past-orders-page.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndCollections();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <Navigation />
      <ErrorBoundary
        fallback={<ErrorFallBack />}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="payment" element={<PaymentForm />} />
            <Route path="orders" element={<PastOrdersPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </Fragment>
  );
};

export default App;
