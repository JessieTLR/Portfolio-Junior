import React from "react";
import Codefond from "../Assets/Codefond.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-container">
        <img src={Codefond} alt="code de fond"></img>
      </div>
      <div className="right-container">
        <h1>
          Jessie Besset <span className="blinking-dot"></span>
        </h1>
        <h2>
          Développeuse Web Front-End Junior - <span>REACT</span>
        </h2>
        {/*<ul className="languagesUl">
          <li className="languagesLi">HTML</li>
          <li className="languagesLi">CSS (SASS)</li>
          <li className="languagesLi">JavaScript</li>
          <li className="languagesLi">React</li>
        </ul>*/}
        {/*<button className="projet">Voir mes projets</button>*/}
      </div>
    </div>
  );
};

export default Header;
