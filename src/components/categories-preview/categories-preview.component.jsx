import { useContext } from "react";
import CategoryPreview from "../category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";
import styled from "styled-components";

const CategoriesPreviewContainer = styled.div`
  min-height: 50vh;
`;

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
