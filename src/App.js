import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home'; // Ensure correct file name
import Projects from './projects'; // Update with your actual Projects component import

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
