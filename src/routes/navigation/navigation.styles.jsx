import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 62px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: auto;
  margin-top: 36px;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    font-size: 12px;
    margin-top: 10px;
  }
`;
export const LogoContainer = styled(Link)`
  height: 50px;
  width: 15%;
  padding: auto;
  @media (max-width: 768px) {
    width: 30%;
    padding: 10px;
    }
    .logo {
      height: 100%;
      width: 100%;
    }
  }
`;

export const NavLinksContainer = styled.div`
  height: 62px;
  width: 70%;
  display: flex;
  align-items: center;
  //justify to end
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  width: 16%;
  margin: 0 10px;
  text-align: center;
  .signup {
    background-color: #e5c643;
    color: #fff;
    border-radius: 10px;
    padding: 10px 10px;
    text-decoration: none;
  }
  &:hover {
    color: #e6c744;
    scale: 1.1;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 5px;
  }
`;

export const DisplayUser = styled.div`
  display: flex;
  justify-content: end;
  width: 97%;
  height: 15px;
  margin-right: 10px;
  padding-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    /* Adjust the dimensions for smaller screens (e.g., mobile devices) */
    font-size: 15px;
  }
`;
