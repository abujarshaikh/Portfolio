/** @format */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import hero from "../component/Assets/hero2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-left">
        <h3>Hi</h3>
        <h1>
          I'm <span>Abujar</span>
        </h1>
        <h2 className="typing">Java Fullstack Developer</h2>
        <p>
          A passionate Java Fullstack Developer with expertise in Core and
          Advanced Java, Hibernate, Spring, and web technologies. With hands-on
          experience in building console-based and web applications, I am also
          skilled in front-end development with HTML, CSS, JavaScript, and
          React-JS, ensuring seamless user experiences. My journey includes
          continuous learning, problem-solving, and refining my skills to create
          efficient, scalable solutions.
        </p>

        <div className="social-icon">
          <a
            href="https://github.com/abujarshaikh"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon github" />
          </a>
          <a
            href="https://wa.me/7517225875"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/direct/t/abujar__2207/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/abujar-shaikh-922636345/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </a>
          <a
            href="https://www.linkedin.com/in/abujar-shaikh-922636345/"
            target="_blank"
            rel="noopener noreferrer">
            <button className="btn">Let's Connect</button>
          </a>
        </div>
      </div>
      <div className="home-right">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};
