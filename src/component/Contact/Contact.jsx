/** @format */

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-12 px-6 sm:px-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-400 mb-8">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-400 focus:outline-none"></textarea>
          <button type="submit" className="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
