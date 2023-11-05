import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutTotal,
} from "./checkout.styles";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import Toast from "../../components/additional-components/toast/toast.component";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const onCheckOut = () => {
    if (cartTotal === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }
    navigate("/payment");
  };

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>Product</CheckoutHeaderBlock>
        <CheckoutHeaderBlock>Description</CheckoutHeaderBlock>
        <CheckoutHeaderBlock>Quantity</CheckoutHeaderBlock>
        <CheckoutHeaderBlock>Price</CheckoutHeaderBlock>
        <CheckoutHeaderBlock>Remove</CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItem={item} />
      ))}
      <CheckoutTotal>TOTAL: ₹{cartTotal}</CheckoutTotal>
      <Button onClick={onCheckOut}>CheckOut</Button>
      {showAlert && (
        <Toast
          color="red"
          message={"Cart is Empty! Please add items to cart."}
        />
      )}
    </CheckoutContainer>
  );
};

export default CheckOut;
