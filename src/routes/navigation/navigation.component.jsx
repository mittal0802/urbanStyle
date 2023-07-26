import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import {
  NavigationContainer,
  NavLinksContainer,
  DisplayUser,
  LogoContainer,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as USlogo } from "../../assets/urbanstyle-logo.svg";
import Footer from "../../components/footer/footer.component";
import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <USlogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutAuthUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          {currentUser ? <NavLink to="/orders">ORDERS</NavLink> : <Fragment />}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <DisplayUser>
        Hello,&nbsp;
        {currentUser && currentUser.displayName
          ? currentUser.displayName
          : currentUser
          ? currentUser.email.split("@")[0]
          : "Guest"}
      </DisplayUser>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
