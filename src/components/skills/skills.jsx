import React from "react";
import "./Skills.scss";
import { skillCategories } from "./data";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <span className="skills__tag">Skills</span>
        <h2 className="skills__title">Technologies I Work With</h2>
        <div className="skills__underline"></div>
        <p className="skills__subtitle">
          I have experience with both frontend and backend technologies along with modern tools that help me deliver efficient and scalable applications.
        </p>
      </div>

      <div className="skills__categories">
        {skillCategories.map((cat) => (
          <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />
        ))}
      </div>
    </section>
  );
}