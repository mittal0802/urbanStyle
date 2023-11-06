import "./product-card.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Toast from "../additional-components/toast/toast.component";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    if (currentUser) {
      addItemToCart(product);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };
  return (
    <div className="product-card-container">
      <LazyLoadImage
        className="image"
        src={imageUrl}
        alt={`${name}`}
        loading="lazy"
      />
      <div className="product-card-details">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button buttonType="invertedAddToCart" onClick={addProductToCart}>
        Add to cart
      </Button>
      {showAlert && (
        <Toast color="red" message="Please login to add items to cart!" />
      )}
      {showToast && (
        <Toast color="green" message="Item added to cart successfully!" />
      )}
    </div>
  );
};

export default ProductCard;
