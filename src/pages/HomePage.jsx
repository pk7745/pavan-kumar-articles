import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  const flagshipArticle = articles[0];

  return (
    <div className="page-container">
      <SEOHead 
        title="Pavan Kumar | Articles, Technology & Ideas"
        description="Personal articles and reflections by Pavan Kumar on technology, India, development, learning and the future."
        canonicalUrl="https://pavankumar.dev/"
      />

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Pavan Kumar</h1>
        <p className="hero-tagline">Articles, Ideas & Reflections</p>
        <p className="hero-bio">
          I write about technology, learning, India, development and experiences that shape my perspective as a student and aspiring technology professional.
        </p>
      </section>

      {/* Articles List Section */}
      <section className="articles-section">
        <div className="section-header">
          <h2 className="section-title">Articles</h2>
        </div>

        <div className="article-list">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-meta">
                <span className="category-tag">{article.category}</span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={14} /> {article.date}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>

              <h3 className="article-card-title">
                <Link to={`/articles/${article.slug}`}>
                  {article.shortTitle}
                </Link>
              </h3>

              <p className="article-excerpt">
                India's journey from independence to the present day — the progress we've made, the challenges that remain, and the responsibility of today's generation towards the India of 2047.
              </p>

              <Link to={`/articles/${article.slug}`} className="read-btn">
                Read Article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
