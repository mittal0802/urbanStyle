import "./ad-marquee.styles.scss";
import Marquee from "react-fast-marquee";

const AdMarquee = () => {
  return (
    <div className="ad-marquee-container">
      <Marquee speed={30} pauseOnHover={true}>
        <p className="marquee-item">
          🔥 HOT DEAL: 50% OFF on all summer dresses! Limited time offer, grab
          yours now! 🔥
        </p>
        <p className="marquee-item">
          🎉 NEW ARRIVAL: Check out our latest collection of trendy sneakers! 🎉
        </p>
        <p className="marquee-item">
          🛍️ WEEKEND SALE: Enjoy an extra 20% OFF on all sale items! Use code:
          WEEKEND20 🛍️
        </p>
        <p className="marquee-item">
          🚚 FREE SHIPPING: We offer free shipping on orders over ₹500! 🚚
        </p>
        <p className="marquee-item">
          🔔 DON'T MISS OUT: Subscribe to our newsletter and be the first to
          know about exclusive deals and promotions! 🔔
        </p>
      </Marquee>
    </div>
  );
};
export default AdMarquee;
