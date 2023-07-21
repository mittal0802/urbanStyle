import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { ReactComponent as USlogo } from "../../assets/urbanstyle-logo.svg";
import Footer from "../../components/footer/footer.component";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    setCurrentUser(null);
    await signOutAuthUser();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <USlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <div className="display-user">
        {currentUser && currentUser.displayName
          ? `Hello, ${currentUser.displayName}`
          : currentUser
          ? `Hello, ${currentUser.email.split("@")[0]}`
          : "Hello, Guest"}
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
