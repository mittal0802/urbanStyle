/*
default
inverted
google-sign-in
*/
import "./button.styles.scss";
const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  alertBox: "alert-box",
  invertedAddToCart: "inverted-add-to-cart",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
