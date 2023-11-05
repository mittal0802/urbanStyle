import styled from "styled-components";

export const PastOrdersPageContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
`;

export const PastOrdersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: black;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const EmptyMessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  color: #96b1c7;
  font-weight: bold;
  margin-top: 50px;
`;
