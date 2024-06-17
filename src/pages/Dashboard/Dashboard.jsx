// src/components/Dashboard.jsx
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "../../redux/slices/currentUserSlice";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, currentUser]);

  return (
    currentUser && (
      <div>
        <h1>Dashboard</h1>
        <div>
          <p>Welcome, {currentUser?.username || "Guest"}</p>
          <p>{currentUser?.email || "No email found"}</p>
        </div>
        <LogoutButton />
      </div>
    )
  );
};

export default Dashboard;
