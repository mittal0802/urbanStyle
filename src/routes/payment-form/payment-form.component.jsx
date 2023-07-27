import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  CardElementContainer,
} from "./payment-form.styles";
import Button from "../../components/button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import Alert from "../../components/alert-menu/alert.component";
import AddressForm from "../../components/address-form/address-form.component";
import { OrderContext } from "../../contexts/orders.context";
import { Fragment } from "react";
import Spinner from "../../components/spinner/spinner.component";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, updateCartItemsReducer, cartItems } =
    useContext(CartContext);
  const { addTransactionToOrders } = useContext(OrderContext);
  const { currentUser, userAddress } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [isTransactionInProcess, setTransactionInProcess] = useState(false);

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (cartTotal === 0) {
      setShowAlert(true);
      setError("Cart is Empty. Please add items to cart.");
      return;
    }
    if (!userAddress) {
      setShowAlert(true);
      setError("Please add shipping address.");
      return;
    }
    setTransactionInProcess(true);
    if (!stripe || !elements) return;
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: (cartTotal + (cartTotal ? 150 : 0)) * 100,
          }),
        }
      ).then((res) => {
        return res.json();
      });
      const {
        paymentIntent: { client_secret },
      } = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser.displayName,
            email: currentUser.email,
          },
        },
      });

      if (paymentResult.error) {
        setShowAlert(true);
        setError("Payment Failed. Please try again.");
      }
      if (paymentResult.paymentIntent.status === "succeeded") {
        const payment_id = paymentResult.paymentIntent.id;
        const transaction = {
          id: payment_id,
          items: cartItems,
          amount: cartTotal + (cartTotal ? 150 : 0),
          date: `${new Date()}`,
          address: userAddress,
        };
        addTransactionToOrders(transaction);
        setShowAlert(true);
        setError("success");
        updateCartItemsReducer([]);
      }
      setTransactionInProcess(false);
    } catch (error) {
      setShowAlert(true);
      setError("Credit Card Details are invalid. Please try again.");
      setTransactionInProcess(false);
    }
  };
  return (
    <Fragment>
      <AddressForm />
      <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
          <h3>Credit Card Payment: </h3>
          <CardElementContainer />
          <span>
            **Use Test Card: 4242 4242 4242 4242, Expiry: 04/24, CVV: 242, Pin:
            42424**
          </span>
          {isTransactionInProcess ? (
            <Button disabled={isTransactionInProcess}>
              <Spinner />
            </Button>
          ) : (
            <Button disabled={isTransactionInProcess}>Pay Now</Button>
          )}
        </FormContainer>
        {showAlert &&
          (error === "success" ? (
            <Alert
              alertType="success"
              message="Payment Successful. Thanks for your order."
              onClose={handleHideAlert}
            />
          ) : (
            <Alert
              alertType="error"
              message={error}
              onClose={handleHideAlert}
            />
          ))}
      </PaymentFormContainer>
    </Fragment>
  );
};

export default PaymentForm;
