import "./product-card.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";
import Alert from "../alert-menu/alert.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const [showAlert, setShowAlert] = useState(false);
  const handleHideAlert = () => {
    setShowAlert(false);
  };
  const { currentUser } = useContext(UserContext);
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    currentUser ? addItemToCart(product) : setShowAlert(true);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-card-details">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button buttonType="invertedAddToCart" onClick={addProductToCart}>
        Add to cart
      </Button>
      {showAlert && (
        <Alert
          message="Please Sign In to add items to cart"
          onClose={handleHideAlert}
          alertType="error"
        />
      )}
    </div>
  );
};

export default ProductCard;
