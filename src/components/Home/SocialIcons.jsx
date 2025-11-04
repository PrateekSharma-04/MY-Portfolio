import React from "react";
import "./SocialIcons.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://github.com/PrateekSharma-04" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/sharmaprateek26/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:prateek.oct04@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
}
