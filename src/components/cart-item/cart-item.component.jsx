import {
  CartItemContainer,
  CartItemImage,
  CartItemName,
  CartItemDetails,
  CartItemPrice,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x ₹{price}
        </CartItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
