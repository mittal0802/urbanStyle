import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import { ReactComponent as USlogo } from "../../assets/urbanstyle-logo.svg";
import Footer from "../../components/footer/footer.component";

const Navigation = () => (
  <Fragment>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <USlogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
    <Footer />
  </Fragment>
);

export default Navigation;
