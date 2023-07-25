import ProductCard from "../product-card/product-card.component";
import {
  SearchResultsContainer,
  SearchResultsTitle,
  SearchResultsList,
} from "./search-results.styles";
const SearchResults = ({ searchedProducts, searchQuery }) => {
  return (
    <SearchResultsContainer>
      <SearchResultsTitle>
        {searchedProducts.length > 0
          ? `Search results for "${searchQuery}"`
          : `No results for "${searchQuery}"`}
      </SearchResultsTitle>
      <SearchResultsList>
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SearchResultsList>
    </SearchResultsContainer>
  );
};

export default SearchResults;
