import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Styles.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    
    emailjs
      .send(
        "service_v86ayi5", 
        "template_vhks3kq", 
        formData,
        "7v1lGlMCI6bqvD9Vx" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Kontaktujte mě</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Jméno</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Zpráva</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Odeslat
        </button>
        {status && <p className="text-center mt-4 text-sm">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;

