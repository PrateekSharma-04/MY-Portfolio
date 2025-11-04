import React from "react";
import "./Projects.scss";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="projects-tag">Portfolio</span>
        <h2 className="projects-title">Featured Projects</h2>
        <div className="underline"></div>
        <p className="projects-subtitle">
          Here are some of my ongoing projects that showcase my skills and
          passion for web development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  );
}
