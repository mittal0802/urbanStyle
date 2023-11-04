import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser } from "../../store/user/user.selector";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  if (currentUser) {
    navigate("/");
  }
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
