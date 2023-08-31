import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css'

function Projects() {
  return (
    <div className='Projects-section'>
  
      <header className='projects-header'>
      <h1>Projects</h1>
      <p>Explore</p>
      </header>
      <Link to="/" className="Back-button">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>
      <div className='Projects-grid'>
      <div className='Project-item'>
          <h2>SummarEase</h2>
          <img src='test2.png' alt='Project 1' />
          <div className='Project-links'>
          <a href= '#' class='Link-tbc' data-tooltip='tbc'>
          <i className="fas fa-globe"></i> Live
          </a>
          <a href='https://github.com/Mohamed1756/summary-app' target="_blank" rel="noopener noreferrer" className='GitHub-link'>
          <i className="fab fa-github"></i> GitHub
          </a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Football Stats App</h2>
          <img src='test5.png' alt='Project 2' />
          <div className='Project-links'>
            <a href= '#' class='Link-tbc' data-tooltip='tbc'>
            <i className="fas fa-globe"></i> Live
            </a>
            <a href='https://github.com/Mohamed1756/Football-Data-Visualization' target="_blank" rel="noopener noreferrer" className='GitHub-link'> 
            <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Binance Liquidations Data</h2>
          <img src='test4.png' alt='Project 3' />
          <div className='Project-links'>
            <a href='http://binance-liquidations.netlify.app/' target="_blank" rel="noopener noreferrer" className='Live-btn'>
            <i className="fas fa-globe"></i> Live</a>
            <a href='https://github.com/Mohamed1756/Binance-Liquidation-Data' target="_blank" rel="noopener noreferrer" className='GitHub-link'>
            <i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Email Spam Detector</h2>
          <img src='email.png' alt='Project 4' />
          <div className='Project-links'>
            <a href='#' class='Link-tbc' data-tooltip='tbc'>
            <i className="fas fa-globe"></i> Live</a>
            <a href='https://github.com/Mohamed1756/spamDetection' target="_blank" rel="noopener noreferrer" className='GitHub-link'>
            <i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>Social Kit </h2>
          <img src='test8.png' alt='Project 5' />
          <div className='Project-links'>
            <a href='#' class='Link-tbc' data-tooltip='tbc'> 
            <i className="fas fa-globe"></i> Live</a>
            <a href='https://github.com/Mohamed1756/SocialKit' target="_blank" rel="noopener noreferrer" className='GitHub-link'>
            <i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
        <div className='Project-item'>
          <h2>BetterLife (iOS) </h2>
          <img src='betterLife.png' alt='Project 6' />
          <div className='Project-links'>
            <a href='#' class='Link-tbc' data-tooltip='tbc'> 
            <i className="fas fa-globe"></i> Live</a>
            <a href='https://github.com/Mohamed1756/BetterLife' target="_blank" rel="noopener noreferrer" className='GitHub-link'>
            <i className="fab fa-github"></i> GitHub</a>
          </div>
        </div>
        </div>

    </div>
  );
}

export default Projects;
