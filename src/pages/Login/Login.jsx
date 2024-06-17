import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth"));

    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
