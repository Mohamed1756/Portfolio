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
  <div class="skills-list">
  <div class="skill-row">
    <div class="skill languages">
      <h4>Languages</h4>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="skill-icon"/>
            
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python" class="skill-icon"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" class="skill-icon"/>
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="skill-icon"/>
    </div>
    <div class="skill databases">
      <h4>Database</h4>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" class="skill-icon"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="SQL" class="skill-icon"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="Firebase" class="skill-icon"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" alt="Redis" class="skill-icon"/>
    </div>
    </div>
    <div class="skill-row">
    <div class="skill frontend">
      <h4>Front-end</h4>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" class="skill-icon"/>
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" class="skill-icon"/> 
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" class="skill-icon"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" class="skill-icon"/>
    </div>
    <div class="skill backend">
      <h4>Backend</h4>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"  alt="Node.js" class="skill-icon"/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"  alt="Express.js" class="skill-icon" />
          
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg" alt="Postman" class="skill-icon"/>
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="Spring Boot" class="skill-icon"/>
    </div>
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
             (Microsoft Azure AI Fundamentals: <a href="https://learn.microsoft.com/en-gb/certifications/exams/ai-900/?wt.mc_id=learningredirect_certs-web-wwl" target="_blank" rel="noopener noreferrer"> AI-900</a>)
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
               <a href="mailto:Mohamed.m365@outlook.com"><img src="/envelope-solid.svg" alt="Email" /></a>
               </span>
              
            </div>
            <div class="Contact-col">
               <span class="Contact-icon">
               <a href="https://github.com/Mohamed1756"><img src="square-github.svg" alt="GitHub" /></a>
               </span>
              
            </div>
            <div class="Contact-col">
               <span class="Contact-icon">
               <a href="https://www.linkedin.com/in/mohamed-m-87a213214/"><img src="Linkedin.svg" alt="LinkedIn" /></a>
               </span>
              
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
