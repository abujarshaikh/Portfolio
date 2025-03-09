/** @format */

import React from "react";
import "./Education.css";
const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "PUNE University",
      year: "2021 - 2024",
      details:
        "Specialized in software development, algorithms, and data structures.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "MG JR. College",
      year: "2019 - 2021",
      details: "Focused on mathematics, physics, and computer science.",
    },
    {
      degree: "Secondary Education",
      institution: "D.B.K.V.P School",
      year: "2018 - 2019",
      details: "Focused on mathematics, english, and information technology.",
    },
  ];

  return (
    <div id="edu" className="bg-gray-900 text-white py-10 px-5 sm:px-10">
      <h2 id="title" className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-green-400">
              {edu.degree}
            </h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.year}</p>
            <p className="text-gray-400 mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
