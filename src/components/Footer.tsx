import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: "center", padding: "10px", background: "#282c34", color: "white" }}>
      <p>&copy; {new Date().getFullYear()} Barbora Šťávová. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
