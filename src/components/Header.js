import React, { useState } from "react";
import { headerLabels } from "./data";
import HeaderLabel from "./HeaderLabel";
import logo  from './logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header>
      <span>
        <img
          width="68"
          src={logo}
          alt="logo"
        />
      </span>
      <nav className="nav">
        <ul id="nav-menu" className={isOpen ? "nav-menu open" : "nav-menu"}>
          {headerLabels.map((label) => (
            <HeaderLabel key={label.name} link={label.link} name={label.name} />
          ))}
        </ul>
        <div className="hamburger" id="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
