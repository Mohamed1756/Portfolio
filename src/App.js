import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './home';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <div className="App">
      {/* Your header and other components */}
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        {/* Add more routes as needed */}
      </Router>
      {/* Other content */}
    </div>
     
    </div>
  );
}

export default App;
