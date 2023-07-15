import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://github.com/mittal0802/urbanStyle"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.instagram.com/keshav2002_/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/keshav-mittal-43588b1a1/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-details">
          <p>Email: contact@urbanstyle.com (f)</p>
          <p>Phone: 110041548 (f)</p>
        </div>
        <div className="slogan">
          <p>UrbanStyle: Where Fashion Meets Comfort!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
