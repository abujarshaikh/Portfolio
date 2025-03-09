/** @format */

import React, { useState } from "react";
import "./Navbar.css";
import ABS from "../Assets/ABS.png";

/**
 *
 */
const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <span>ABS || Portfolio</span>
      </div>
      <ul className="links">
        <li>
          <a href="#">
            <button>Home </button>
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
          {" "}
          <a href="#contact">
            <button>Contact</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
