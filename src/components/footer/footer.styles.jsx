import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, white, #96b1c7);
  margin-top: 70px;
  padding: 20px;
  text-align: center;
  left: 0;
  right: 0;
  position: relative;
  bottom: 0;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterConnect = styled.span`
  font-size: 32px;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SocialIcons = styled.div`
  margin-bottom: 20px;

  a {
    display: inline-block;
    margin-right: 15px;
    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ContactDetails = styled.div`
  margin-bottom: 10px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const FooterSlogan = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
