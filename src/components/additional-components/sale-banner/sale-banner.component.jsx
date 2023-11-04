import { SaleBannerContainer } from "./sale-banner.styles";
import { ReactComponent as SaleBanner } from "../../../assets/salebanner.svg";
import { useNavigate } from "react-router-dom";
const SaleBannerComponent = () => {
  const navigate = useNavigate();
  const onClickhandler = () => {
    navigate(`/shop`);
  };
  return (
    <SaleBannerContainer>
      <SaleBanner />
      <button className="sale-banner-button" onClick={onClickhandler}>
        Shop Now
      </button>
    </SaleBannerContainer>
  );
};

export default SaleBannerComponent;
