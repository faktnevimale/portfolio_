import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Kontaktujte mě</h1>
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "auto" }}>
        <input type="text" placeholder="Vaše jméno" style={{ marginBottom: "10px", padding: "8px" }} />
        <input type="email" placeholder="Váš Email" style={{ marginBottom: "10px", padding: "8px" }} />
        <textarea placeholder="Vaše zpráva" style={{ marginBottom: "10px", padding: "8px" }} />
        <button type="submit" style={{ padding: "8px" }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
