import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLoggedInStatus } from "../../redux/slices/authSlice";

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(fetchLoggedInStatus());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
