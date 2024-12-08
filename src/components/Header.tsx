import React from "react";
import { Link } from "react-router-dom";
import "../pages/Styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;




