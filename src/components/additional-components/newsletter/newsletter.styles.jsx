import styled from "styled-components";

export const NewsletterContainer = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5c643;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 40px 30px 40px 30px;
  }
`;

export const NewsletterTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

export const NewsletterSubtitle = styled.span`
  font-size: 25px;
  color: #fffcf8;

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  margin-top: 20px;
  width: 474px;
  height: 67px;
  background: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 40px;
    width: 95%;
  }
`;
export const NewsletterInput = styled.input`
  padding: 10px;
  width: 350px;
  border: none;
  padding-left: 30px;
  font-size: 18px;
  outline: none;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 12px;
    margin-left: 5px;
  }
`;
export const NewsletterButton = styled.button`
  width: 110px;
  height: 90%;
  font-size: 18px;
  background: #000000;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  margin-right: 5px;
  text-align: center;

  @media (max-width: 768px) {
    width: 25%;
    font-size: 12px;
    margin-right: 2px;
  }
`;
