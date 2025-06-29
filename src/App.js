import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Nikhil Sharma</h1>
      <h2>Frontend Developer</h2>
      <p>Email: <a href="mailto:nikhil@example.com">nikhil@example.com</a></p>
      <p>GitHub: <a href="https://github.com/nikhil070723" target="_blank" rel="noreferrer">nikhil070723</a></p>

      <h3>About Me</h3>
      <p>I love building beautiful websites using HTML, CSS, and JavaScript.</p>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>Personal Portfolio</li>
        <li>Basic Blog Website</li>
      </ul>
    </div>
  );
}

export default App;


