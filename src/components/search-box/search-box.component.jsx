import React from "react";
import { SearchBoxContainer, SearchIcon } from "./search-box.styles";

const SearchBox = ({ placeholder, onSubmitHandler }) => (
  <SearchBoxContainer>
    <SearchIcon className="faSearch" />
    <input
      type="search"
      placeholder={placeholder}
      onChange={onSubmitHandler}
      onKeyDown={onSubmitHandler}
    />
  </SearchBoxContainer>
);

export default SearchBox;
