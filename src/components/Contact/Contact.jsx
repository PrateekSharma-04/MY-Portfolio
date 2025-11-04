// src/components/Contact/Contact.jsx
import React, { useState } from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", form);
    setForm({ name: "", email: "", message: "" });
    alert("Your message has been sent successfully!");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="contact-tag">Get In Touch</span>
        <h2 className="contact-title">Let's Work Together</h2>
        <div className="underline"></div>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss opportunities? Feel free to
          reach out!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
          Send Message <FaEnvelope />
        </button>
      </form>

      <div className="contact-socials">
        <div className="social-item">
          <a
            href="https://github.com/PrateekSharma-04"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <span>GitHub</span>
        </div>
        <div className="social-item">
          <a
            href="https://www.linkedin.com/in/sharmaprateek26/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <span>LinkedIn</span>
        </div>
        <div className="social-item">
          <a href="mailto:prateek.oct04@gmail.com">
            <FaEnvelope />
          </a>
          <span>Email</span>
        </div>
      </div>
    </section>
  );
}
