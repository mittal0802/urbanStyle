import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  display: flex;
  margin: 30px auto 30px auto;
  width: 30%;
  padding: 10px;
  height: 30px;
  align-items: center;
  border: 1px solid #ccc;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  input {
    flex: 1;
    border: none;
    outline: none;
    font-family: "Roboto Condensed";
    font-size: 18px;
    font-weight: bold;

    /* Clear button styles */
    &::-webkit-search-cancel-button {
      size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    margin: 10px auto 10px auto;
    width: 55%;
    height: 20px;
    font-size: 14px;
  }
`;

export const SearchIcon = styled("i").attrs({ className: "fa fa-search" })`
  margin-right: 15px;
`;
