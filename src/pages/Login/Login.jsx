import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";

const Login = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
