import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Hemant Aacharya's Portfolio</h1>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="hero" className="hero">
        <h2>Welcome to My Portfolio</h2>
        <p>I'm Hemant Aacharya, a passionate developer.</p>
      </section>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>Details about Hemant Aacharya's background, interests, and goals.</p>
      </section>
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <p>Overview of work experiences and projects.</p>
      </section>
      <section id="education" className="education">
        <h2>Education</h2>
        <p>Details regarding educational background.</p>
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <p>Showcase of completed or ongoing projects.</p>
      </section>
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <p>List of technical skills and proficiencies.</p>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Contact details and forms.</p>
      </section>
    </div>
  );
}

export default App;