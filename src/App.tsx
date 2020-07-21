import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
