// components
import LoginPage from "./LoginPage";

const AuthForm = ({ type }) => {
  return <>{type === "login" && <LoginPage />}</>;
};

export default AuthForm;
