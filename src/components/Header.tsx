import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px", color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/projects" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Projects</Link>
        <Link to="/contact" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;


