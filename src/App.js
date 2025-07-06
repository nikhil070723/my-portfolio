import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Nikhil</h1>
      <marquee><h1>Criminal Psycologist</h1></marquee>
      <p>Email: <a href="mailto:nikhil@example.com">kewlaninikhil7@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/nikhil070723" target="_blank" rel="noreferrer">nikhil070723</a></p>

      <h2>About Me</h2>
      <p>I love building beautiful websites using HTML, CSS, and Python.</p>
      <h3>Hobbies</h3>
      <p>Lawn Tennis</p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
      </ul>

      <h2>Qualification</h2>
      <ul>
        <li>BCA</li>
        <marquee><h3><li>MA in Psycology</li></h3></marquee>
      </ul>
    </div>
  );
}

export default App;


