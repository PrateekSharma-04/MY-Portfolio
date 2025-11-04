import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
