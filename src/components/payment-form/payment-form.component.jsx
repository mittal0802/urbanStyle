import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  CardElementContainer,
} from "./payment-form.styles";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import Alert from "../alert-menu/alert.component";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, setCartItems } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
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
          body: JSON.stringify({ amount: cartTotal * 100 }),
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
          },
        },
      });
      console.log(paymentResult);
      if (paymentResult.error) {
        setShowAlert(true);
        setError("Payment Failed. Please try again.");
      }
      if (paymentResult.paymentIntent.status === "succeeded") {
        setShowAlert(true);
        setError("success");
        setCartItems([]);
      }
      setTransactionInProcess(false);
    } catch (error) {
      setShowAlert(true);
      setError("Credit Card Details are invalid. Please try again.");
      setTransactionInProcess(false);
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h3>Credit Card Payment: </h3>
        <CardElementContainer />
        <Button disable={isTransactionInProcess}>Pay Now</Button>
      </FormContainer>
      {showAlert &&
        (error === "success" ? (
          <Alert
            alertType="success"
            message="Payment Successful. Thanks for your order."
            onClose={handleHideAlert}
          />
        ) : (
          <Alert alertType="error" message={error} onClose={handleHideAlert} />
        ))}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
