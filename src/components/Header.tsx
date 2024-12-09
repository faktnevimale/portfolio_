import React from "react";
import { Link } from "react-router-dom";
import "../pages/Styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Úvod
        </Link>
        <Link to="/about" className="nav-link">
          O mně
        </Link>
        <Link to="/projects" className="nav-link">
          Mé projekty
        </Link>
        <Link to="/contact" className="nav-link">
          Kontakt
        </Link>
      </nav>
    </header>
  );
};

export default Header;




