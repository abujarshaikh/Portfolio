/** @format */

import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      description: "A powerful object-oriented programming language.",
    },
    {
      name: "Spring Framework",
      description: "A framework for building enterprise Java applications.",
    },
    {
      name: "Hibernate",
      description: "A framework for ORM (Object-Relational Mapping) in Java.",
    },
    {
      name: "JSP & Servlets",
      description:
        "Technologies for building dynamic web applications in Java.",
    },
    {
      name: "JDBC",
      description:
        "Java API for connecting and executing queries on databases.",
    },
    {
      name: "MySQL",
      description: "A widely used relational database management system.",
    },
    {
      name: "HTML",
      description: "The standard markup language for creating web pages.",
    },
    {
      name: "CSS",
      description: "A stylesheet language for designing web pages.",
    },
    {
      name: "JavaScript",
      description: "A versatile scripting language for web development.",
    },
    {
      name: "React",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "Data Structures & Algorithms",
      description: "Fundamentals for writing efficient code.",
    },
    {
      name: "Git & GitHub",
      description: "Version control system and repository hosting service.",
    },
    {
      name: "Maven",
      description: "A build automation tool for Java projects.",
    },
    {
      name: "REST APIs",
      description: "Web services following REST architectural principles.",
    },
    {
      name: "SQL",
      description: "A language for managing and querying relational databases.",
    },
    {
      name: "Django",
      description: "A high-level Python web framework for rapid development.",
    },
    {
      name: "AIML",
      description:
        "Artificial Intelligence and Machine Learning concepts and techniques.",
    },
    {
      name: "Selenium",
      description: "A framework for automated testing of web applications.",
    },
    {
      name: "Python",
      description:
        "A versatile and powerful programming language used in web development, data science, and automation.",
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div id="skills" className="bg-gray-900 text-white py-10 px-5 sm:px-10">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl text-center shadow-lg hover:shadow-2xl transition duration-300 relative"
            onMouseEnter={() => setHoveredSkill(skill.description)}
            onMouseLeave={() => setHoveredSkill(null)}>
            <p className="text-lg font-semibold text-green-400">{skill.name}</p>
            {hoveredSkill === skill.description && (
              <div className="absolute bg-black text-gray-300 text-sm p-2 rounded-md mt-2 w-48 left-1/2 transform -translate-x-1/2">
                {skill.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
