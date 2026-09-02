import React from "react";
import "./Projects.scss";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const title = project.title || project.name || "Project";

  const status = project.status || "Completed";

  const statusClass =
    status.toLowerCase().replace(/\s+/g, "-") === "in-progress"
      ? "project-status--in-progress"
      : status.toLowerCase() === "planned"
      ? "project-status--planned"
      : "project-status--completed";

  return (
    <article className="project-featured-card">
      {/* Image */}
      <div className="project-featured-image-wrapper">
        <img
          src={project.image}
          alt={title}
          className="project-featured-image"
        />
      </div>

      {/* Content */}
      <div className="project-featured-content">
        <div className="project-featured-heading">
          <h3 className="project-featured-title">{title}</h3>

          <span className={`project-status ${statusClass}`}>
            <span className="project-status-dot"></span>
            {status}
          </span>
        </div>

        {/* Reference */}
        {project.reference && (
          <p className="project-reference">{project.reference}</p>
        )}

        {/* Description */}
        <p className="project-featured-description">
          {project.description}
        </p>

        {/* Technologies */}
        {project.tech && project.tech.length > 0 && (
          <div className="project-featured-tech">
            {project.tech.map((technology, index) => (
              <span className="project-tech-tag" key={`${technology}-${index}`}>
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="project-featured-buttons">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo-btn"
            >
              <FaExternalLinkAlt />
              View Project
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-code-btn"
            >
              <FaGithub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}