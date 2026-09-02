import React from "react";
import "./SkillGrid.scss";
import {
  FaCode,
  FaBrain,
  FaDatabase,
  FaServer,
  FaRobot,
  FaCloud,
  FaNetworkWired,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const skills = [
  FaCode,
  FaBrain,
  FaDatabase,
  FaServer,
  FaRobot,
  FaCloud,
  FaNetworkWired,
  FaLaptopCode,
  FaRocket,
];

export default function SkillGrid() {
  return (
    <div className="skill-grid">
      {skills.map((Icon, index) => (
        <div className="skill-card" key={index}>
          <Icon />
        </div>
      ))}
    </div>
  );
}
