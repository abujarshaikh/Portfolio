/** @format */

import React from "react";
import "./About.css";
import hero from "../Assets/hero2.png";
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-img">
          <img src={hero} alt="" />
        </div>
        <h3 className="typing">Java Fullstack Developer</h3>
        <p className="typing-test">
          Hi, I'm Abujar, a passionate Fullstack Java Developer with expertise in
          front-end and back-end technologies. I specialize in creating dynamic,
          user-friendly applications with Java, React, and modern web
          technologies.
        </p>
        <p className="typing-test">
          With hands-on experience in frameworks like Spring and Hibernate, I
          develop scalable and efficient solutions. I'm constantly learning and
          evolving to stay ahead in the tech industry.
        </p>
        <p className="typing-test">Let's build something amazing together!</p>
      </div>
    </section>
  );
};

export default About;
