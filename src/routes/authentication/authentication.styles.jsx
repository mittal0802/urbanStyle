import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 50px auto 80px auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
  }

  /* When the screen size is 768px or smaller */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    width: 80%;

    & > * {
      margin-bottom: 50px;
      /* Add margin between components in column layout */
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 70%;

    & > * {
      margin-bottom: 50px;
      /* Add margin between components in column layout */
    }
  }
`;
