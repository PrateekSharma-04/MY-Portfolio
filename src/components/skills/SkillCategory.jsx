import React from "react";
import "./Skills.scss";

export default function SkillCategory({ title, color, skills }) {
  return (
    <div className="skill-category">
      <h3
        className="skill-category__title"
        style={{ color }}
      >
        {title}
      </h3>

      <div
        className="skill-category__accent"
        style={{ backgroundColor: color }}
      ></div>

      <ul className="skill-category__list">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <li key={index} className="skill-item">
              <Icon
                className="skill-item__icon"
                style={{ color: skill.color }}
              />

              <span className="skill-item__name">
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}