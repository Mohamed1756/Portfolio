import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>NAME</h1>
      <p>SOFTWARE ENGINEER | NYC</p>
    </header>
    <div class="Skills-certificates-section">
      <div class="Skills-section">
        <h2>SKILLS</h2>
        <div class="Skills-category">
          <h3>Languages</h3>
          <p>JavaScript, Python</p>
        </div>
        <div class="Skills-category">
          <h3>Frameworks</h3>
          <p>React, EJS, Bootstrap</p>
        </div>
        <div class="Skills-category">
          <h3>Databases</h3>
          <p>MongoDB, SQL</p>
        </div>
        <div class="Skills-category">
          <h3>Tools</h3>
          <p>Git, Microsoft Azure, Docker, Postman, JUnit, Netlify</p>
        </div>
      </div>
      <div className='Certificates-section'>
        <h2>Certificates</h2>
        <div className="Certificate-list">
          <div className="Certificate-item">
            <a href="link_to_certificate1" target="_blank" rel="noopener noreferrer">
              <img src="azure.svg" alt="azure img" />
            </a> 
            (Microsoft Azure Fundamentals: <a href="https://www.microsoft.com/en-us/learning/exam-az-900.aspx" target="_blank" rel="noopener noreferrer">AZ-900</a>)
          </div>
          <div className="Certificate-item">
            <a href="link_to_certificate2" target="_blank" rel="noopener noreferrer">
              <img src="azure.svg" alt="azure img" />
            </a> 
            (Microsoft Azure AI Fundamentals: <a href="https://learn.microsoft.com/en-gb/certifications/exams/ai-900/?wt.mc_id=learningredirect_certs-web-wwl" target="_blank" rel="noopener noreferrer">AI-900</a>)
          </div>
          <div className="Certificate-item">
            <a href="link_to_certificate3" target="_blank" rel="noopener noreferrer">
              <img src="azure.svg" alt="azure img" />
            </a> 
            (Microsoft Azure Data Fundamentals: <a href="https://learn.microsoft.com/en-gb/certifications/exams/dp-900/?wt.mc_id=learningredirect_certs-web-wwl" target="_blank" rel="noopener noreferrer">DP-900</a>)
          </div>
        </div>
      </div>
    </div>
    <div className='Projects-section'>
      <span className="CV-icon">
        <img src="arrow-right.svg" alt="arrow-img" />
        <a href="/">Explore Projects</a>
      </span>
    </div>
    <div className='CV-Contact-section'>
      <div className="Contact-section">
        <h2>Contact</h2>
        <p>
          <span className="Contact-icon">
            <img src="/envelope-solid.svg" alt="Email" />
            <a href="mailto:Mohamed.m365@outlook.com">Email</a>
          </span><br />
          <span className="Contact-icon">
            <img src="square-github.svg" alt="GitHub" />
            <a href="https://github.com/Mohamed1756">GitHub</a>
          </span><br />
          <span className="Contact-icon">
            <img src="Linkedin.svg" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/mohamed-m-87a213214/">LinkedIn</a>
          </span><br />
        </p>
      </div>
      <div className="CV-section">
        <h2>CV</h2>
        <div className="CV-content">
          <span className="CV-icon">
            <img src="CV.svg" alt="CV-img" />
          </span>
          <a className="CV-button" href="/MohamedCV.pdf" target="_blank" rel="noopener noreferrer">
            Download My CV (PDF)
          </a>
        </div>
      </div>
    </div>
  
  </div>
  
  );
}

export default App;
