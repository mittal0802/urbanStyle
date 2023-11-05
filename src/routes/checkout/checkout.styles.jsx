import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  margin: 40px auto 40px auto;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    width: 85%;
    margin: 20px auto 0;

    button {
      margin: 70px auto 50px auto;
      width: 70%;
    }
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  font-weight: bolder;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media (max-width: 768px) {
    width: 20%;
    /* Adjust the width for smaller screens */
    font-size: 13px;
    &:last-child {
      width: 12%;
    }
  }
`;

export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
