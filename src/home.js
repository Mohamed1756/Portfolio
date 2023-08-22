import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function Home() {
  return (
    <div className="Home">
    <header className="Home-header">
       <h1>NAME</h1>
       <p>SOFTWARE ENGINEER | NYC</p>
    </header>
    <div className="Skills-certificates-section">
       <div class="Skills-section">
          <h2>SKILLS</h2>
          <div class="Skills-table">
             <div class="Skills-category">
                <h4>Languages: JavaScript | Python | Java | TypeScript</h4>
             </div>
             <div class="Skills-category">
                <h4>Databases: MongoDB | SQL | Firebase | Redis</h4>
             </div>
             <div class="Skills-category">
                <h4>Front-End: React | Next.js | Bootstrap | HTML | CSS </h4>
             </div>
             <div class="Skills-category">
                <h4>Backend: Node.js | Rest API | PostMan | SpringBoot </h4>
             </div>
         </div>
       </div>
    
    <div className='Certificates-section'>
       <h2>Certificates</h2>
       <div className="Certificate-list">
          
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
       <span className="Contact-icon">
       <img src="arrow-right.svg" alt="arrow-img" />
       <Link to="/projects">Explore Projects</Link>
       </span>
    </div>

   <div className='CV-Contact-section'>
      <div class="Contact-section">
         <h2>Contact</h2>
         <div class="Contact-columns">
            <div class="Contact-col">
               <span class="Contact-icon">
               <img src="/envelope-solid.svg" alt="Email" />
               </span>
               <a href="mailto:Mohamed.m365@outlook.com">Email</a>
            </div>
            <div class="Contact-col">
               <span class="Contact-icon">
               <img src="square-github.svg" alt="GitHub" />
               </span>
               <a href="https://github.com/Mohamed1756">GitHub</a>
            </div>
            <div class="Contact-col">
               <span class="Contact-icon">
               <img src="Linkedin.svg" alt="LinkedIn" />
               </span>
               <a href="https://www.linkedin.com/in/mohamed-m-87a213214/">LinkedIn</a>
            </div>
         </div>
      </div>

      <div className="CV-section">
         <h2>CV</h2>
         <div className="CV-content">
            
            <a className="CV-button" href="/MohamedCV.pdf" target="_blank" rel="noopener noreferrer">
             Download My CV
            </a>
         </div>
      </div>
   </div>
 </div>

  );
}

export default Home;
