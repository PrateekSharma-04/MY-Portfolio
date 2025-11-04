import React from "react";
import "./About.scss";
import InfoCard from "./InfoCard";
import infoCards from "./data";
import profileImage from "../../assets/icons/profile.jpg"; // change to your real image path

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <span className="about__tag">About Me</span>
        <h2 className="about__title">Get to Know Me</h2>
        <div className="about__underline"></div>
      </div>

      <div className="about__container">
        {/* Left Side Image */}
        <div className="about__image-wrapper">
          <img src={profileImage} alt="Prateek Sharma" className="about__image" />
        </div>

        {/* Right Side Info */}
        <div className="about__content">
          <p className="about__text">
            I'm a passionate Full Stack Developer with a keen interest in building modern web
            applications that solve real-world problems. With expertise in both frontend and
            backend technologies, I bring ideas to life through clean, efficient code.
          </p>

          <p className="about__text">
            My journey in web development started with curiosity about how things work on the
            internet. Today, I specialize in the MERN stack and love exploring new technologies
            that push the boundaries of what's possible on the web.
          </p>

          <div className="about__grid">
            {infoCards.map((card) => (
              <InfoCard
                key={card.id}
                Icon={card.Icon}
                title={card.title}
                text={card.text}
                color={card.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
