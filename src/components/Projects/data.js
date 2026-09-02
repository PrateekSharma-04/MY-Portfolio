import project1 from "../../assets/icons/Resume-analyser.png";
import project2 from "../../assets/icons/budget-analytics.png";
import project3 from "../../assets/icons/ManoVa.jpeg";
import project4 from "../../assets/icons/VihaRa.png";
import project5 from "../../assets/icons/fake-news-detection.png";
import project6 from "../../assets/icons/wanderlust.png";
import project7 from "../../assets/icons/jarvis-chatbot.png";

export const projects = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    status: "Completed",

    reference:
      "AI-powered resume screening and job-description matching using NLP and machine learning.",

    description:
      "A resume analysis system that parses PDF and DOCX resumes, compares them with job descriptions, calculates a match percentage and ATS score and provides resume improvement suggestions.",

    tech: [
      "Python",
      "Streamlit",
      "FastAPI",
      "scikit-learn",
      "NLP",
      "TF-IDF",
      "Cosine Similarity",
      "PDFPlumber",
      "python-docx",
      "Machine Learning",
    ],

    image: project1,

    code: "https://github.com/PrateekSharma-04/ai-resume-analyzer",

    demo: "https://ai-resume-analyzer-34ugpthn4wbqh9yoqek5c9.streamlit.app/",
  },

  {
    id: "budget-analytics",
    title: "Budget Analytics & Forecasting System",
    status: "Completed",

    reference:
      "AI-assisted personal finance tracking and analytics powered by Gemini and Google Sheets.",

    description:
      "A personal finance application for recording income and expenses through natural language descriptions, storing transactions in Google Sheets and exploring financial analytics by month, category and date range.",

    tech: [
      "Python",
      "Streamlit",
      "Google GenAI SDK",
      "Gemini",
      "Google Sheets API",
      "AI Integration",
    ],

    image: project2,

    code: "https://github.com/PrateekSharma-04/budget-analytics-and-forecasting-system",

    demo: "https://budget-analytics-and-forecasting-system-3dupkxdtkfzr6crxnz5mnd.streamlit.app/",
  },

  {
    id: "manova",
    title: "ManoVa",
    status: "In Progress",

    reference:
      "AI-powered mental wellness application built with Flutter and a Python backend.",

    description:
      "A mental wellness application designed around features such as mood tracking, journaling and supportive experiences, with a Flutter frontend connected to a backend APIs.",

    tech: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "AI/ML",
    ],

    image: project3,

    code: "https://github.com/PrateekSharma-04/Manova",

    demo: "",
  },

  {
    id: "vihara",
    title: "VihaRa",
    status: "In Progress",

    reference:
      "AI-powered rural tourism platform focused on discovering hidden destinations across Himachal Pradesh.",

    description:
      "A tourism platform designed to help travelers discover offbeat villages, hidden destinations and local experiences across Himachal Pradesh, with AiVa providing personalized exploration guidance.",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Sass",
      "React Router",
      "AI Integration",
    ],

    image: project4,

    code: "https://github.com/PrateekSharma-04/VihaRa-Project",

    demo: "https://viha-ra-project.vercel.app/",
  },

  {
    id: "fake-news-detection",
    title: "AI Fake News Detection System",
    status: "Completed",

    reference:
      "Machine-learning system that classifies news text as REAL or FAKE using NLP techniques.",

    description:
      "A web-based fake news detection system where users submit news text through a Next.js frontend and a FastAPI backend uses TF-IDF features and a Logistic Regression model to generate predictions, confidence scores and explanations.",

    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Tailwind CSS",
      "Scikit-learn",
      "Pandas",
    ],

    image: project5,

    code: "https://github.com/PrateekSharma-04/ai-based-fake-news-detection-system",

    demo: "https://ai-based-fake-news-detection-system-zeta.vercel.app/",
  },

  {
    id: "wanderlust",
    title: "Wanderlust - Airbnb Replica",
    status: "Completed",

    reference:
      "Full-stack accommodation listing and booking platform inspired by Airbnb.",

    description:
      "A full-stack web application for creating and managing accommodation listings with user authentication, sessions, image uploads, cloud storage and map-related functionality.",

    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Cloudinary",
      "Mapbox",
    ],

    image: project6,

    code: "https://github.com/PrateekSharma-04/wanderlust-website",

    demo: "https://wanderlust-website-x2x4.onrender.com/",
  },

  {
    id: "ai-assistant",
    title: "AI Assistant - Jarvis",
    status: "In Progress",

    reference:
      "A conversational assistant project with a dedicated frontend and backend for handling chat requests.",

    description:
      "A Jarvis inspired chat application consisting of a frontend user interface and backend services for handling chat requests.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Backend APIs",
    ],

    image: project7,

    code: "https://github.com/PrateekSharma-04/ai-assistant",

    demo: "https://jarvis-ai-gtk0.onrender.com/",
  },
];
