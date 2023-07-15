import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserFromEmailAndPassword,
  passwordReset,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleForgotPassword = async () => {
    try {
      await passwordReset(email);
      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      switch (error.code) {
        case "auth/missing-email":
          alert("Please enter an email address.");
          break;
        case "auth/invalid-email":
          alert("Invalid email address.");
          break;
        case "auth/user-not-found":
          alert("User not found.");
          break;
        default:
          alert("Error resetting password.");
      }
      console.log(error.message);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async (event) => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("Error signing in with google", error.message);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user);
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
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
      <a onClick={handleForgotPassword} className="forgot-pass" href="#">
        Forgot Password?
      </a>
    </div>
  );
};

export default SignInForm;
