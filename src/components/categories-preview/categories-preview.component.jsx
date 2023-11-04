import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../category-preview/category-preview.component";

import styled from "styled-components";

const CategoriesPreviewContainer = styled.div`
  min-height: 50vh;
`;

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
