import React from "react";
import "../pages/Styles.css";
import image from '../assets/images/stavova_web1.jpg';

const Homepage: React.FC = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-text">
        <h1>Vítejte na mém webu!</h1>
        <p>Jmenuju se Barbora a nabízím 2D a 3D grafiky na zakázku.</p>
      </div>
      <div className="homepage-image">
        <img src={image} alt="Ukázka grafiky" />
      </div>
    </div>
  );
};

export default Homepage;


