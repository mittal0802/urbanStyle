import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInAuthUserFromEmailAndPassword,
  passwordReset,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import Toast from "../additional-components/toast/toast.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const statusMessages = {
  1: { color: "red", message: "Please enter your email." },
  2: { color: "red", message: "Email address is not valid." },
  3: { color: "red", message: "User not found." },
  4: { color: "red", message: "Something went wrong. Please try again." },
  5: { color: "red", message: "Incorrect password." },
  6: {
    color: "green",
    message: "Password reset email sent. Please Check your Inbox",
  },
  7: {
    color: "red",
    message:
      "Too many failed attempts. Please try again later or reset your password.",
  },
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleForgotPassword = async () => {
    try {
      await passwordReset(email);
      setError(statusMessages[6]);
      setShowAlert(true);
    } catch (error) {
      switch (error.code) {
        case "auth/missing-email":
          setError(statusMessages[1]);
          setShowAlert(true);
          break;
        case "auth/invalid-email":
          setError(statusMessages[2]);
          setShowAlert(true);
          break;
        case "auth/user-not-found":
          setError(statusMessages[3]);
          setShowAlert(true);
          break;
        default:
          setError(statusMessages[4]);
          setShowAlert(true);
      }
      setTimeout(() => {
        setShowAlert(false);
        setError(null);
      }, 5000);
      console.log(error.message);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async (event) => {
    try {
      await signInWithGooglePopup();
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
      await signInAuthUserFromEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError(statusMessages[5]);
        setShowAlert(true);
      }
      if (error.code === "auth/user-not-found") {
        setError(statusMessages[3]);
        setShowAlert(true);
      }
      if (error.code === "auth/too-many-requests") {
        setError(statusMessages[7]);
        setShowAlert(true);
      }
      console.log("Error signing in", error.message);
    }
    setTimeout(() => {
      setShowAlert(false);
      setError(null);
    }, 5000);
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
      {showAlert && <Toast color={error.color} message={error.message} />}
    </div>
  );
};

export default SignInForm;
