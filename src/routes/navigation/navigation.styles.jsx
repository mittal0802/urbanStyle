import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.div`
  height: 89px;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to top, white, #96b1c7);
`;
export const LogoContainer = styled(Link)`
  height: 50px;
  width: 188.4px;
  padding: 25px;
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
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  font-weight: bold;
  cursor: pointer;

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
