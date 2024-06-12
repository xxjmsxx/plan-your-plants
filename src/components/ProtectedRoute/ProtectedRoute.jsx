import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = document.cookie
    .split("; ")
    .some((row) => row.startsWith("auth_status=authenticated"));

  console.log("ProtectedRoute: isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
