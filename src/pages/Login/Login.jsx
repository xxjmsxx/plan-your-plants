import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const jwtCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt"))
      ?.split("=")[1];

    if (jwtCookie) {
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
