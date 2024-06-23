import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { loggedIn, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
