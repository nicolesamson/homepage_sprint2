import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import navImage from "../assets/navbarLogo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any additional logout logic here
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navImage} alt="HSI Logo" className="navbar-logo" />
      </div>

      <div className="navbar-actions">
        <button className="logout-button" onClick={handleLogout}>
          Logout <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
