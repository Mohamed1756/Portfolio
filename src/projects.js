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
          <h2>SummarEase</h2>
          <img src='test2.png' alt='Project 1' />
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Project Title 2</h2>
          <img src='test5.png' alt='Project 2' />
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Binance Liquidations Data</h2>
          <img src='test4.png' alt='Project 3' />
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Project Title 4</h2>
          <img src='email.png' alt='Project 4' />
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Project Title 5</h2>
          <img src='test8.png' alt='Project 5' />
          <div className='Project-links'>
            <a href='#'>Live</a>
            <a href='#'>GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Project Title 6</h2>
          <img src='test.png' alt='Project 6' />
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
