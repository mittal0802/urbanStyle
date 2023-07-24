import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutTotal,
} from "./checkout.styles";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
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
    </CheckoutContainer>
  );
};

export default CheckOut;
