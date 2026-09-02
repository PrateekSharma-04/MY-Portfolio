import React from "react";
import "./Skills.scss";
import { skillCategories, engineeringTools, coreConcepts } from "./data";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      {/* Header */}
      <div className="skills__header">
        <span className="skills__tag">Skills</span>

        <h2 className="skills__title">
          Technologies I <span>Work With</span>
        </h2>

        <p className="skills__subtitle">
          I combine modern full-stack development with AI/ML to build
          intelligent products that are practical, scalable and user-focused.
        </p>

        <div className="skills__underline"></div>
      </div>

      {/* Main Skill Categories */}
      <div className="skills__categories">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            color={category.color}
            skills={category.skills}
          />
        ))}
      </div>

      {/* Engineering & Tools */}
      <div className="engineering-section">
        <h3 className="engineering-section__title">Engineering & Tools</h3>

        <div className="engineering-section__underline"></div>

        <div className="engineering-tools">
          {engineeringTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div className="engineering-tool" key={tool.name}>
                <Icon
                  className="engineering-tool__icon"
                  style={{ color: tool.color }}
                />

                <span>{tool.name}</span>
              </div>
            );
          })}
        </div>

        <div className="engineering-divider"></div>

        <div className="core-concepts">
          {coreConcepts.map((concept) => {
            const Icon = concept.icon;

            return (
              <div className="core-concept" key={concept.name}>
                <Icon
                  className="core-concept__icon"
                  style={{ color: concept.color }}
                />

                <span>{concept.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
