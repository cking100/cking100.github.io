import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  // Default darkMode to true so the dark theme is always applied initially
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Update the <body> class on darkMode change
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
