import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, deleteItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &lt;
        </span>
        {quantity}
        <span className="arrow" onClick={() => addItemToCart(cartItem)}>
          &gt;
        </span>
      </div>
      <span className="price">₹{price}</span>
      <span
        className="remove-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
