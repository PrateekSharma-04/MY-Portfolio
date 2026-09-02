import React, { useEffect, useRef, useState } from "react";
import "./Projects.scss";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import ProjectThumbnail from "./ProjectThumbnail";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Stores references to all thumbnail buttons
  const thumbnailRefs = useRef([]);

  const totalProjects = projects.length;

  const goToProject = (index) => {
    if (index < 0) {
      setActiveIndex(totalProjects - 1);
    } else if (index >= totalProjects) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  const goToPrevious = () => {
    goToProject(activeIndex - 1);
  };

  const goToNext = () => {
    goToProject(activeIndex + 1);
  };

  /*
   * Whenever the active project changes,
   * smoothly move its thumbnail into view.
   */
  useEffect(() => {
    const activeThumbnail = thumbnailRefs.current[activeIndex];
    const container = document.querySelector(".projects-thumbnails-track");

    if (!activeThumbnail || !container) return;

    const containerLeft = container.getBoundingClientRect().left;
    const containerRight = container.getBoundingClientRect().right;
    const thumbnailLeft = activeThumbnail.getBoundingClientRect().left;
    const thumbnailRight = activeThumbnail.getBoundingClientRect().right;

    if (thumbnailLeft < containerLeft) {
      container.scrollBy({
        left: thumbnailLeft - containerLeft,
        behavior: "smooth",
      });
    } else if (thumbnailRight > containerRight) {
      container.scrollBy({
        left: thumbnailRight - containerRight,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="projects" id="projects">
      {/* SECTION HEADER */}
      <div className="projects-header">
        <span className="projects-tag">Projects</span>

        <h2 className="projects-title">Featured Projects</h2>

        <div className="underline"></div>

        <p className="projects-subtitle">
          A selection of my major projects that combine full-stack development
          with AI to solve real-world problems.
        </p>
      </div>

      {/* MAIN PROJECT CAROUSEL */}
      <div className="projects-carousel">
        {/* PREVIOUS PROJECT */}
        <button
          type="button"
          className="project-nav project-nav--prev"
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          &lt;
        </button>

        {/* MAIN CARD */}
        <div className="projects-main">
          <ProjectCard project={projects[activeIndex]} />
        </div>

        {/* NEXT PROJECT */}
        <button
          type="button"
          className="project-nav project-nav--next"
          onClick={goToNext}
          aria-label="Next project"
        >
          &gt;
        </button>
      </div>

      {/* POSITION DOTS */}
      <div className="projects-dots">
        {projects.map((project, index) => (
          <button
            key={project.id || index}
            type="button"
            className={`project-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to ${project.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>

      {/* THUMBNAIL CAROUSEL */}
      <div className="projects-thumbnails-wrapper">
        {/* THUMBNAIL PREVIOUS */}
        <button
          type="button"
          className="thumbnail-arrow thumbnail-arrow--prev"
          onClick={() => {
            const container = document.querySelector(
              ".projects-thumbnails-track",
            );

            if (container) {
              container.scrollBy({
                left: -280,
                behavior: "smooth",
              });
            }
          }}
          aria-label="Scroll thumbnails left"
        >
          &lt;
        </button>

        {/* THUMBNAILS */}
        <div className="projects-thumbnails-track">
          {projects.map((project, index) => (
            <ProjectThumbnail
              key={project.id || index}
              project={project}
              index={index}
              isActive={index === activeIndex}
              onClick={goToProject}
              thumbnailRef={(element) => {
                thumbnailRefs.current[index] = element;
              }}
            />
          ))}
        </div>

        {/* THUMBNAIL NEXT */}
        <button
          type="button"
          className="thumbnail-arrow thumbnail-arrow--next"
          onClick={() => {
            const container = document.querySelector(
              ".projects-thumbnails-track",
            );

            if (container) {
              container.scrollBy({
                left: 280,
                behavior: "smooth",
              });
            }
          }}
          aria-label="Scroll thumbnails right"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
