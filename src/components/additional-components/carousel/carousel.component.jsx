import { CarouselContainer } from "./carousel.styles";
import { ReactComponent as Carousel } from "../../../assets/carousel.svg";
import { useNavigate } from "react-router-dom";
const CarouselBanner = () => {
  const navigate = useNavigate();
  const onClickhandler = () => {
    navigate(`/shop`);
  };
  return (
    <CarouselContainer>
      <Carousel />
      <button className="carousel-button" onClick={onClickhandler}>
        Shop Now
      </button>
    </CarouselContainer>
  );
};

export default CarouselBanner;
