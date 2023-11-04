import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #000000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0;
`;

export const FooterBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  margin-bottom: 100px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    margin-top: 70px;
    margin-bottom: 70px;
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyInfo = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    align-items: center;
    width: 90%;
  }
`;

export const BrandName = styled.span`
  font-size: 40px;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const BrandSlogan = styled.span`
  font-size: 20px;
  font-family: Roboto, sans-serif;
  color: #8e8e8e;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const SocialIcons = styled.div`
  a {
    display: inline-block;
    margin-right: 15px;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 768px) {
    a {
      margin-right: 7.5px;
      margin-left: 7.5px;
    }
    .responsive-svg {
      width: 38px;
      height: 38px;
    }
  }
`;

export const OtherLinks = styled.div`
  width: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const LinkBox = styled.div`
  h3 {
    color: #fff;
  }
  a {
    display: block;
    margin: 15px 0px;
    color: #8e8e8e;
    &:hover {
      color: #fff;
    }
  }
  font-family: Roboto, sans-serif;
  font: 20px;
  color: #8e8e8e;

  @media (max-width: 768px) {
    text-align: center;
    h3 {
      font-size: 1em;
    }
    a {
      font-size: 0.8em;
    }
  }
`;
