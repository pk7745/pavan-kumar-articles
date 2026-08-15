import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';

export default function ArticlesPage() {
  return (
    <div className="page-container">
      <SEOHead 
        title="Articles | Pavan Kumar S"
        description="Browse long-form articles and reflections on technology, India, AI, and development by Pavan Kumar S."
        canonicalUrl="https://pavan-kumar-articles.vercel.app/articles"
      />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>All Articles</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Essays, technical thoughts, and civic reflections on technology, India, and growth.
          </p>
        </header>

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

              <h2 className="article-card-title" style={{ fontSize: '1.75rem' }}>
                <Link to={`/articles/${article.slug}`}>
                  {article.shortTitle}
                </Link>
              </h2>

              <p className="article-excerpt">
                {article.subtitle}
              </p>

              <Link to={`/articles/${article.slug}`} className="read-btn">
                Read Article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
