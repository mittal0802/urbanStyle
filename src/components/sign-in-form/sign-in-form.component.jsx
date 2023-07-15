import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleChange = async (event) => {
    const { users } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(users);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { users } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong Password");
      }
      if (error.code === "auth/user-not-found") {
        alert("User doesn't exist");
      }
      console.log("Error signing in", error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={onChangeHandler}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          onChange={onChangeHandler}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" onClick={handleChange} buttonType="google">
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
