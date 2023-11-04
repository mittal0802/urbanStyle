import styled from "styled-components";

export const SaleBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 30px;
  position: relative;
  mix-blend-mode: multiply;

  .sale-banner-button {
    width: 15%;
    height: 10%;
    position: relative;

    left: 30%;
    position: absolute;
    top: 87%; /* Vertically center the button */
    transform: translate(-50%, -50%);
    background: #000000;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 150%;
    line-height: 45px;
    overlay: hidden;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  @media (max-width: 800px) {
    margin-bottom: 20px;

    .sale-banner-button {
      width: 70px;
      height: 20px;
      position: relative;

      left: 30%;
      position: absolute;
      top: 83%; /* Vertically center the button */
      transform: translate(-50%, -50%);
      background: #000000;
      border-radius: 5px;
      font-size: 10px;
      line-height: 10px;
      color: #ffffff;
    }
  }
`;
