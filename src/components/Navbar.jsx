import { Link, useLocation } from "react-router-dom";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <FaUsers />
          <span>EmployeeHub</span>
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Dashboard
          </Link>

          <Link
            to="/add"
            className={location.pathname === "/add" ? "active-link" : ""}
          >
            <FaUserPlus />
            Add Employee
          </Link>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;