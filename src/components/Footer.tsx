import React from "react";
import "../pages/Styles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Barbora Šťávová. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


