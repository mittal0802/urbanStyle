import Directory from "../../components/directory/directory.component";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.postimg.cc/d0c5RfSB/hats.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.postimg.cc/Y9p8ZW7L/jackets.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.postimg.cc/TPjCtczX/sneakers.jpg",
    },
    {
      id: 4,
      title: "Women",
      imageUrl: "https://i.postimg.cc/htdCdnMv/women.jpg",
    },
    {
      id: 5,
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
