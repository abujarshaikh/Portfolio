/** @format */

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="">
          <div className="">
            <h2 className="">ABUJAR SHAIKH</h2>
            <p className="">Full Stack Developer | Tech Enthusiast</p>
          </div>
          <div className="">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-green-400 transition"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-green-400 transition"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-green-400 transition"></i>
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Abujar Shaikh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
