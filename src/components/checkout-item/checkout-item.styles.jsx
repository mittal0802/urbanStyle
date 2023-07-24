import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 80px;
  border-bottom: 1px solid darkgrey;
  padding: 5px 0;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 60px;
    font-size: 15px;
  }
`;

export const CheckoutItemImage = styled.div`
  width: 12%;
  padding-right: 60px;

  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 18%;
    padding-right: 15px;
  }
`;

export const CheckoutItemName = styled.span`
  width: 20%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CheckoutItemQuantity = styled.span`
  display: flex;
  width: 20%;
  .arrow {
    cursor: pointer;
    font-weight: bolder;
  }

  .value {
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CheckoutItemPrice = styled.span`
  width: 20%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ItemRemoveButton = styled.span`
  width: 6.5%;
  cursor: pointer;
  font-weight: bolder;
  @media (max-width: 768px) {
    width: 7%;
  }
`;
