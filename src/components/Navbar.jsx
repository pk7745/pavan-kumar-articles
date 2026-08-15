import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="brand-logo" aria-label="Pavan Kumar Home">
          <span className="brand-name">Pavan Kumar</span>
          <span className="brand-subtitle">Articles, Ideas & Reflections</span>
        </NavLink>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button 
            className="icon-btn" 
            onClick={toggleTheme} 
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light theme" : "Dark theme"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-btn"
            aria-label="Pavan Kumar LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
