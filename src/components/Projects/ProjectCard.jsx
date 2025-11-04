import React from "react";
import "./Projects.scss";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech, i) => (
            <span key={i} className="project-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.code} className="code-btn" target="_blank">
            <FaCode /> Code
          </a>
          <a href={project.demo} className="demo-btn" target="_blank">
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}
