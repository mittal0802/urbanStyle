import Directory from "../../components/directory/directory.component";
import Newsletter from "../../components/additional-components/newsletter/newsletter.component";
import CarouselBanner from "../../components/additional-components/carousel/carousel.component";
import { ReactComponent as Brands } from "../../assets/brands.svg";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Caps & Hats",
      imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
    },
    {
      id: 2,
      title: "Jackets & Hoodies",
      imageUrl: "https://i.ibb.co/K9sBJ8q/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/3CPJTn0/sneakers.png",
    },
    {
      id: 4,
      title: "Women",
      imageUrl: "https://i.ibb.co/WfV0yrD/women.png",
    },
    {
      id: 5,
      title: "Men",
      imageUrl: "https://i.ibb.co/hdDfgvV/men.png",
    },
  ];

  return (
    <div>
      <CarouselBanner />
      <Brands />
      <Directory categories={categories} />
      <Newsletter />
    </div>
  );
}

export default Home;
