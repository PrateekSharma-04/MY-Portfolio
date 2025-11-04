import React from "react";
import "./SkillGrid.scss";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaGlobe,
  FaBolt,
  FaMobileAlt,
  FaCloud,
  FaCogs,
  FaTerminal,
} from "react-icons/fa";

const skills = [
  FaCode,         
  FaDatabase,    
  FaServer,      
  FaGlobe,       
  FaBolt,        
  FaMobileAlt,   
  FaCloud,      
  FaCogs,      
  FaTerminal,    
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
