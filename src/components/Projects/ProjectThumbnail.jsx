import React from "react";

export default function ProjectThumbnail({
  project,
  index,
  isActive,
  onClick,
  thumbnailRef,
}) {
  return (
    <button
      ref={thumbnailRef}
      type="button"
      className={`project-thumbnail ${isActive ? "active" : ""}`}
      onClick={() => onClick(index)}
      aria-label={`View ${project.title}`}
      aria-current={isActive ? "true" : undefined}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-thumbnail__image"
      />

      <div className="project-thumbnail__content">
        <h4>{project.title}</h4>

        <span className={`project-thumbnail__status ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
          <span className="status-dot"></span>
          {project.status}
        </span>
      </div>
    </button>
  );
}