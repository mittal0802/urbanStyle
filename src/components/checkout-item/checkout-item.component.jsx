import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  ItemRemoveButton,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, deleteItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const deleteItemHandler = () => {
    deleteItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <CheckoutItemImage>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutItemImage>
      <CheckoutItemName className="name">{name}</CheckoutItemName>
      <CheckoutItemQuantity className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &lt;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &gt;
        </div>
      </CheckoutItemQuantity>
      <CheckoutItemPrice className="price">₹{price}</CheckoutItemPrice>
      <ItemRemoveButton className="remove-button" onClick={deleteItemHandler}>
        &#10005;
      </ItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
