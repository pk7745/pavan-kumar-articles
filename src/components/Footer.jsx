import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <p>© 2026 Pavan Kumar S. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.2rem', color: 'var(--text-muted)' }}>
            Independent publication on Technology, Society & Growth.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <NavLink to="/" style={{ color: 'var(--text-secondary)' }}>Home</NavLink>
          <NavLink to="/articles" style={{ color: 'var(--text-secondary)' }}>Articles</NavLink>
          <NavLink to="/about" style={{ color: 'var(--text-secondary)' }}>About</NavLink>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
