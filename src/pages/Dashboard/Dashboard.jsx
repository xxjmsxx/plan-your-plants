import { useSelector } from "react-redux";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p>Welcome, {currentUser?.username || "Guest"}</p>
        <p>{currentUser?.email || "No email found"}</p>
      </div>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
