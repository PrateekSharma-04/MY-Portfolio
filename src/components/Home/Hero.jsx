import React from "react";
import "./Hero.scss";
import SocialIcons from "./SocialIcons";
import SkillGrid from "./SkillGrid";
import LogoIcon from "../Common/LogoIcon";

export default function Hero() {
  // 👇 Function to handle smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Section */}
        <div className="hero-left">
          <div className="available-badge highlight">
            <LogoIcon size="w-3.5 h-3.5" />
            <span>Available for Work</span>
          </div>

          <h1 className="hero-title">
            <span className="highlight">Hi, I'm Prateek Sharma</span>
          </h1>

          <h2 className="hero-role">Full Stack Developer</h2>

          <p className="hero-desc">
            I build scalable web applications using React, Node.js, and MongoDB.
            Passionate about creating seamless user experiences and efficient
            solutions that make a difference.
          </p>

          {/* ✅ Scroll Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work →
            </button>

            <button
              className="btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>

          <SocialIcons />
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <SkillGrid />
        </div>
      </div>
    </section>
  );
}
