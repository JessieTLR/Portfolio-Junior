import React from "react";
import Codefond from "../Assets/Codefond.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-container">
        <img src={Codefond} alt="code de fond"></img>
      </div>
      <div className="right-container">
        <h1 className="header-title">
          <span className="firstname">
            Jess
            <span className="i-container">
              i<span className="blinking-dot"></span>
            </span>
            e
          </span>
          <span className="lastname"> Besset</span>
        </h1>
        <h2>
          Développeuse Web Full Stack Junior - <span>REACT & PYTHON</span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Header;
