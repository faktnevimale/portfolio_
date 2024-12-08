import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>O mně</h1>
      <p>
        Ahoj! Jmenuju se Barbora a je mi 18 let. Jsem studentkou 3. ročníku IT na SŠ Baltaci ve Zlíně. 
      </p>
      <h2>Zájmy</h2>
      <p>
        Kromě programování a grafiky ráda čtu knihy, kreslím a hraju pc hry.
      </p>
      <h2>Dovednosti</h2>
      <ul>
        <li>Grafický design</li>
        <li>Focení</li>
        <li>HTML a CSS</li>
        <li>Základy JavaScriptu a Reactu</li>
        <li>C#</li>
      </ul>
      <h2>Budoucnost</h2>
      <p>
        Po dokončení školy bych se ráda zaměřila na práci v oblasti grafického designu. Chci se podílet na projektech, které budou mít pozitivní dopad na společnost.
      </p>
    </div>
  );
};

export default About;
