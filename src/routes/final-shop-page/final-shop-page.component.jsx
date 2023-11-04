import SearchBox from "../../components/search-box/search-box.component";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { useState, useEffect } from "react";
import SearchResults from "../../components/search-results/search-results.component";
import styled from "styled-components";

const ShopPage = styled.div`
  min-height: 50vh;
`;

const FinalShopPage = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categoriesMap = useSelector(selectCategoriesMap);
  const onSubmitChange = (event) => {
    if (event.key === "Enter" || event.target.value.length === 0) {
      const searchString = event.target.value.toLocaleLowerCase();
      setSearchField(searchString);
    }
  };

  useEffect(() => {
    if (searchField.length === 0) return;
    const categoryTitles = Object.keys(categoriesMap);
    const newfilteredProducts = categoryTitles.reduce((acc, title) => {
      const products = categoriesMap[title];
      return acc.concat(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchField)
        )
      );
    }, []);
    setFilteredProducts(newfilteredProducts);
  }, [searchField, categoriesMap]);

  return (
    <ShopPage>
      <SearchBox
        placeholder="search for products"
        onSubmitHandler={onSubmitChange}
      />
      {searchField.length === 0 ? (
        <CategoriesPreview />
      ) : (
        <SearchResults
          searchedProducts={filteredProducts}
          searchQuery={searchField}
        />
      )}
    </ShopPage>
  );
};
export default FinalShopPage;
