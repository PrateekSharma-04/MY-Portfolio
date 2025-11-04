import React from "react";
import "./Skills.scss";

export default function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3 className="skill-category__title">{title}</h3>
      <ul className="skill-category__list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <skill.icon className="skill-item__icon" style={{ color: skill.color }} />
            <span className="skill-item__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
