import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
  margin: 0px auto 50px auto;
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0px auto 50px auto;
    width: 80%;
  }
`;

export const FormContainer = styled.form`
  min-width: 200px;
  button {
    margin-top: 30px;
    margin-left: auto;
  }
  span {
    color: red;
    display: block;
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    min-width: 90%;

    button {
      margin-top: 30px;
      width: 100%;
    }
  }
`;

export const CardElementContainer = styled(CardElement)`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  height: 30px;
  padding: 10px;
`;
