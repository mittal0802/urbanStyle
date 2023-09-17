import {
  FooterContainer,
  FooterContent,
  FooterConnect,
  SocialIcons,
  FooterSlogan,
  ContactDetails,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterConnect>Connect With Us</FooterConnect>
        <SocialIcons>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </SocialIcons>
        <ContactDetails>
          <h3>Email: contacts@urbanstyle.com</h3>
          <h3>Phone: 110041548, 1234567890</h3>
        </ContactDetails>
        <FooterSlogan>
          <p>UrbanStyle: Where Fashion Meets Comfort!</p>
        </FooterSlogan>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
