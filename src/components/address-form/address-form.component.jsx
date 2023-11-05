import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartContext } from "../../contexts/cart.context";
import { selectUserAddress } from "../../store/user/user.selector";
import { setUserAddress } from "../../store/user/user.action";
import Button from "../button/button.component";
import "./address-form.styles.scss";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
};

const AddressForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, phone, address } = formFields;
  const userAddress = useSelector(selectUserAddress);
  const [isAddressAdded, setIsAddressAdded] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const AddressAddedHandler = () => {
    setIsAddressAdded(false);
    dispatch(setUserAddress({ ...defaultFormFields }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setUserAddress({ ...formFields }));
    setIsAddressAdded(true);
  };
  const { cartTotal } = useContext(CartContext);
  return (
    <div className="address-form-container">
      <div className="checkout-summary">
        <h5 className="summary-heading">Summary</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Products
            <span>₹{cartTotal}</span>
          </li>
          <li className="list-group-item">
            Shipping
            <span>₹{cartTotal ? 150 : 0}</span>
          </li>
          <li className="list-group-item">
            <div>
              <strong>Total amount</strong>
              <p>(including GST)</p>
            </div>
            <span>
              <strong>₹{cartTotal + (cartTotal ? 150 : 0)}</strong>
            </span>
          </li>
        </ul>
      </div>
      <div className="address-form">
        <h5 className="billing-heading">Shipping Address</h5>
        <div className="mb-4">
          {!isAddressAdded ? (
            <form onSubmit={handleSubmit}>
              <FormInput
                label="First name"
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Last name"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Address"
                name="address"
                type="address"
                value={address}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Mobile Number"
                name="phone"
                type="phone"
                value={phone}
                onChange={handleChange}
                required
              />
              <Button>Add Address</Button>
            </form>
          ) : (
            <div className="currentAddressContainer">
              <h3>Current Address</h3>
              <div className="currentAddress">
                {userAddress
                  ? `${userAddress.firstName} ${userAddress.lastName},  ${userAddress.address}, Contact: ${userAddress.phone}`
                  : "No address added"}
              </div>
              <Button onClick={AddressAddedHandler}>Edit Address</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
