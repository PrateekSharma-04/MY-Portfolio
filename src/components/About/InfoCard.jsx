import React from "react";
import "./About.scss";

export default function InfoCard({ Icon, title, text, color }) {
  return (
    <div className="info-card">
      <div className="info-card__icon" style={{ backgroundColor: color + "1A", color }}>
        <Icon />
      </div>
      <div className="info-card__content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
