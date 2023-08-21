import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import your main App component
import './index.css'; // Import your CSS if needed


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
