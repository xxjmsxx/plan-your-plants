/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import MyGarden from "./pages/MyGarden/MyGarden.jsx";
import MyPlants from "./pages/MyPlants/MyPlants.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInStatus } from "./redux/slices/authSlice.js";
import { fetchCurrentUser } from "./redux/slices/currentUserSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loggedIn) {
      dispatch(fetchLoggedInStatus());
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchCurrentUser());
    }
  }, [loggedIn, dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-garden" element={<MyGarden />} />
            <Route path="/my-plants" element={<MyPlants />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
