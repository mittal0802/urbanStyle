import {
  NewsletterContainer,
  NewsletterTitle,
  NewsletterSubtitle,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
} from "./newsletter.styles";
import { useState } from "react";
import Toast from "../toast/toast.component";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <NewsletterContainer>
      <NewsletterTitle>
        JOIN SHOPPING COMMUNITY <br /> TO GET MONTHLY PROMO
      </NewsletterTitle>
      <NewsletterSubtitle>
        Type your email down below and be young wild generation
      </NewsletterSubtitle>
      <NewsletterForm onSubmit={handleSubmit}>
        <NewsletterInput
          type="email"
          placeholder="Add your mail here"
          onChange={handleChange}
          value={email}
        />
        <NewsletterButton>Subscribe</NewsletterButton>
      </NewsletterForm>
      {visible && (
        <Toast color="green" message="You have successfully subscribed!" />
      )}
    </NewsletterContainer>
  );
};

export default Newsletter;
