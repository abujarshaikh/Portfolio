/** @format */

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <span>ABS || Portfolio</span>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#">
            <button>Home</button>
          </a>
        </li>
        <li>
          <a href="#about">
            <button>About</button>
          </a>
        </li>
        <li>
          <a href="#edu">
            <button>Education</button>
          </a>
        </li>
        <li>
          <a href="#skills">
            <button>Skills</button>
          </a>
        </li>
        <li>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
