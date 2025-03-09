/** @format */

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    const serviceID = "service_w01ebup";
    const templateID = "template_c8a1grn";
    const publicKey = "25gRCTlVKTcmsH6TV";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        setError("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-12 px-6 sm:px-10">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <p className="text-center text-gray-400 mb-8">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        {submitted && (
          <p className="text-green-400 text-center mb-4">
            ✅ Your message has been sent successfully!
          </p>
        )}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-md text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
            required></textarea>
          <button type="submit" className="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
