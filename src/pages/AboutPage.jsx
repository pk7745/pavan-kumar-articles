import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  return (
    <div className="page-container">
      <SEOHead 
        title="About | Pavan Kumar S"
        description="Learn more about Pavan Kumar S, a BCA student interested in software development, AI engineering, backend systems, and long-form writing."
        canonicalUrl="https://pavankumar.dev/about"
      />

      <div className="about-view">
        {/* Header */}
        <header className="about-header">
          <div className="about-avatar-large">PK</div>
          <div>
            <h1 className="about-title">Pavan Kumar S</h1>
            <p className="about-subtitle">BCA Student · AI & Backend Development</p>
          </div>
        </header>

        {/* Bio Content */}
        <div className="about-content">
          <p>
            Hello! I am a Bachelor of Computer Applications (BCA) student with a passion for software development, artificial intelligence, and backend infrastructure engineering.
          </p>

          <p>
            My interest in computer science centers on building reliable systems, understanding how technology scales to serve population-level needs, and exploring how modern AI models can be applied ethically to solve real-world problems.
          </p>

          <p>
            Outside of coursework and technical projects, I write long-form articles and reflections on technology trends, India's civic and digital growth, learning methodologies, and the responsibilities of young technology professionals entering the industry.
          </p>

          <h2 style={{ fontSize: '1.45rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
            Connect & Collaborate
          </h2>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--text-secondary)' }}>
            I welcome discussions on technology, software craftsmanship, and writing. Feel free to connect with me on LinkedIn:
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} /> Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
