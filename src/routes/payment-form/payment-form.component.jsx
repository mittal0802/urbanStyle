import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  CardElementContainer,
} from "./payment-form.styles";
import Button from "../../components/button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useState } from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectUserAddress } from "../../store/user/user.selector";
import Toast from "../../components/additional-components/toast/toast.component";
import AddressForm from "../../components/address-form/address-form.component";
import { OrderContext } from "../../contexts/orders.context";
import { Fragment } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PaymentForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, updateCartItemsReducer, cartItems } =
    useContext(CartContext);
  const { addTransactionToOrders } = useContext(OrderContext);
  const currentUser = useSelector(selectCurrentUser);
  const userAddress = useSelector(selectUserAddress);
  const [showToast, setshowToast] = useState(false);
  const [error, setError] = useState(null);
  const [isTransactionInProcess, setTransactionInProcess] = useState(false);

  const Error_Messages = [
    { color: "red", message: "Cart is Empty. Please add items to cart." },
    { color: "red", message: "Please Enter Delivery Address." },
    { color: "red", message: "Payment Failed. Please try again." },
    {
      color: "red",
      message: "Card Details not found. Please enter valid details.",
    },
    {
      color: "green",
      message:
        "Payment Successful. Thank you for shopping with us. Redirecting to Orders Page...",
    },
  ];
  const closeToast = () => {
    setTimeout(() => {
      setshowToast(false);
      setError(null);
    }, 5000);
  };
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (cartTotal === 0) {
      setshowToast(true);
      setError(Error_Messages[0]);
      closeToast();
      return;
    }
    if (!userAddress) {
      setshowToast(true);
      setError(Error_Messages[1]);
      closeToast();
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
        console.log(res);
        return res.json();
      });

      const cardDetails = elements.getElement(CardElement);

      const {
        paymentIntent: { client_secret },
      } = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser.displayName,
            email: currentUser.email,
          },
        },
      });
      if (paymentResult.error) {
        if (paymentResult.error.message === "Your card number is incomplete.")
          setError(Error_Messages[3]);
        else setError(Error_Messages[2]);
        setshowToast(true);
        closeToast();
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        const payment_id = paymentResult.paymentIntent.id;
        const transaction = {
          id: payment_id,
          items: cartItems,
          amount: cartTotal + (cartTotal ? 150 : 0),
          date: `${new Date()}`,
          address: userAddress,
        };
        addTransactionToOrders(transaction);
        setshowToast(true);
        setError(Error_Messages[4]);
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
        closeToast();
        updateCartItemsReducer([]);
      }
      setTransactionInProcess(false);
    } catch (error) {
      setshowToast(true);
      setError(Error_Messages[3]);
      setTransactionInProcess(false);
      closeToast();
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
        {showToast && <Toast color={error.color} message={error.message} />}
      </PaymentFormContainer>
    </Fragment>
  );
};

export default PaymentForm;
