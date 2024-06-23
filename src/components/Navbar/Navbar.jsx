import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <h1>Plan your Plants</h1>
      </div>
      {!isDropdownOpen && (
        <button className={styles.dropdownToggle} onClick={toggleDropdown}>
          ☰
        </button>
      )}
      {isDropdownOpen && (
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              onClick={toggleDropdown}
              to="/dashboard"
              className={styles.navLink}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleDropdown}
              to="/my-garden"
              className={styles.navLink}
            >
              My Gardens
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleDropdown}
              to="/my-plants"
              className={styles.navLink}
            >
              My Plants
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
