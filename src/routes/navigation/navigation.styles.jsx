import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 62px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin: auto;
  margin-top: 36px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled(Link)`
  height: 50px;
  width: 15%;
  padding: auto;
  @media (max-width: 768px) {
    height: 69px;
    width: 150px;
    padding: 10px;
    }
    .logo {
      height: 100%;
      width: 100%;
    }
  }
`;

export const NavLinksContainer = styled.div`
  width: 44%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    /* Adjust the dimensions for smaller screens (e.g., mobile devices) */
    width: 70%;
    font-size: 15px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
  width: 16%;

  .signup {
    background-color: #e5c643;
    color: #fff;
    border-radius: 10px;
    padding: 10px 10px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    padding: 4px 4px;
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
