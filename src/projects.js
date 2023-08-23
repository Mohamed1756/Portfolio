import React from 'react';
import './projects.css'

function Projects() {
  return (
    <div className='Projects-section'>
      <header className='projects-header'>
      <h1>Projects</h1>
      <p>Explore</p>
      </header>
      <div className='Projects-grid'>
        <div className='Project-item'>
          <img src='project1.jpg' alt='Project 1' />
          <h2>Project Title 1</h2>
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <img src='project2.jpg' alt='Project 2' />
          <h2>Project Title 2</h2>
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <img src='project3.jpg' alt='Project 3' />
          <h2>Project Title 3</h2>
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <img src='project4.jpg' alt='Project 4' />
          <h2>Project Title 4</h2>
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <img src='project5.jpg' alt='Project 5' />
          <h2>Project Title 5</h2>
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <img src='project6.jpg' alt='Project 6' />
          <h2>Project Title 6</h2>
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        </div>

    </div>
  );
}

export default Projects;
