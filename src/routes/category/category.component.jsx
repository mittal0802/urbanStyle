import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "./category.styles";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <ProductsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </CategoryContainer>
  );
};
export default Category;
