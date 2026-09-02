import React from "react";
import "./About.scss";
import InfoCard from "./InfoCard";
import infoCards from "./data";
import profileImage from "../../assets/icons/my-image.jpg"; // change to your real image path

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
          <img
            src={profileImage}
            alt="Prateek Sharma"
            className="about__image"
          />
        </div>

        {/* Right Side Info */}
        <div className="about__content">
          <p className="about__text">
            I'm an AI-Native Full Stack Developer and B.Tech graduate in
            Information Technology, passionate about building practical
            applications that combine modern web development with AI.
          </p>

          <p className="about__text">
            I enjoy working across the stack - from creating responsive
            interfaces and REST APIs to developing AI-powered features using
            Python, NLP and LLM technologies. Through internships and personal
            projects, I've worked on solutions ranging from resume analysis and
            financial analytics to AI-powered applications.
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
