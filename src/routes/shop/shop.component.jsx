import { Routes, Route } from "react-router-dom";
import FinalShopPage from "../final-shop-page/final-shop-page.component";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<FinalShopPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
