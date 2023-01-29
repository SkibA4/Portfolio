import React, { FunctionComponent, useState } from "react";
import "../styles/Header.scss";

const Header: FunctionComponent = () => {
    const [toggle, setToggleState] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Skiba
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-brackets-curly nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => setToggleState(!toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggleState(!toggle)}>
            <i className="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
