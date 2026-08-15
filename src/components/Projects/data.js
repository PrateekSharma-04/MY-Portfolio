import project1 from "../../assets/icons/project1.jpg";
import project2 from "../../assets/icons/project2.jpg";
import project3 from "../../assets/icons/project3.jpg";

export const projects = [
  {
    title: "Wanderlust – Airbnb Replica", 
    description:
      "A full-featured stay booking platform with listings, maps, and user authentication built using the MERN stack.",
    tech: ["MongoDB", "Express.js", "Node.js", "JavaScript", "HTML", "CSS"],
    image: project1,
    code: "https://github.com/PrateekSharma-04/wanderlust-website",
    demo: "https://wanderlust-website-x2x4.onrender.com/",
  },
  {
    title: "VihaRa (Tourism Platform)",
    description:
      "A tourism platform promoting rural destinations with live maps, weather, and AR vision integration.",
    tech: [ "Node.js", "Express.js", "MongoDB", "REST APIs", "AI Integration"],
    image: project2,
    code:"https://github.com/PrateekSharma-04/VihaRa-Project",
    demo: "https://viha-ra-project.vercel.app/",
  },
  {
    title: "ManoVa (AI-Powered Mental Health Tracker)",
    description:
      "A mental wellness web app offering mood tracking, journaling, and support features with help of AI.",
    tech: ["Flutter", "Dart", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "AI/ML"],
    image: project3,
    code: "https://github.com/PrateekSharma-04/Manova",
  },
];
