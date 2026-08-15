import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Copy, Linkedin, Check } from 'lucide-react';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';
import IndianFlag from '../components/IndianFlag';
import { Figure1UPISpace, Figure2DeepTech } from '../components/Figures';

export default function ArticlePage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Match article by slug or default to flagship article
  const article = articles.find((a) => a.slug === slug) || articles[0];

  const currentUrl = `https://pavankumar.dev/articles/${article.slug}`;

  // Handle Share on LinkedIn
  const handleLinkedInShare = () => {
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedinShareUrl, '_blank', 'noopener,noreferrer');
  };

  // Handle Copy Link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2500);
  };

  // Schema.org JSON-LD Article Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.subtitle,
    "image": `https://pavankumar.dev${article.heroImage}`,
    "datePublished": article.isoDate,
    "dateModified": article.modifiedDate,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorRole,
      "url": "https://pavankumar.dev/about"
    },
    "publisher": {
      "@type": "Person",
      "name": "Pavan Kumar S",
      "url": "https://pavankumar.dev"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.canonicalUrl
    }
  };

  // Marquee text list (Only text moves horizontally)
  const marqueeTextList = [
    "JAI HIND",
    "•",
    "VANDE MATARAM",
    "•",
    "YUVA SHAKTI FOR VIKSIT BHARAT @2047",
    "•",
    "INDIA AT 80",
    "•",
    "JAI HIND",
    "•",
    "VANDE MATARAM",
    "•",
    "YUVA SHAKTI FOR VIKSIT BHARAT @2047",
    "•",
    "INDIA AT 80",
    "•"
  ];

  // Split HTML at figure placement markers for React component rendering
  const contentParts = article.contentHtml.split('<!-- FIGURE_1 -->');
  const part1 = contentParts[0];
  const remainingParts = contentParts[1] ? contentParts[1].split('<!-- FIGURE_2 -->') : ["", ""];
  const part2 = remainingParts[0];
  const part3 = remainingParts[1] || "";

  return (
    <div className="page-container">
      <SEOHead 
        title={article.metaTitle}
        description={article.metaDescription}
        canonicalUrl={article.canonicalUrl}
        ogType="article"
        publishedDate={article.isoDate}
        modifiedDate={article.modifiedDate}
        author={article.author}
        articleJsonLd={jsonLdData}
      />

      <article className="article-view">
        {/* Article Header */}
        <header className="article-header">
          <div className="article-header-meta">
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

          <h1 className="article-main-title" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span>India at 80: From Independence to a Vision for the Future</span>
            <IndianFlag width={48} height={32} />
          </h1>

          <div className="author-byline">
            <div className="author-avatar">PK</div>
            <div>
              <div className="author-info-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{article.author}</span>
                <IndianFlag width={22} height={15} />
              </div>
              <div className="author-info-sub">{article.authorRole}</div>
            </div>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="article-hero-visual">
          <img src={article.heroImage} alt={article.heroAlt} loading="eager" />
        </div>

        {/* Editorial Body with React Components for Figures */}
        <div className="editorial-body">
          <div dangerouslySetInnerHTML={{ __html: part1 }} />
          {contentParts[1] && <Figure1UPISpace />}
          {part2 && <div dangerouslySetInnerHTML={{ __html: part2 }} />}
          {remainingParts[1] && <Figure2DeepTech />}
          {part3 && <div dangerouslySetInnerHTML={{ __html: part3 }} />}
        </div>

        {/* Scrolling Jai Hind Banner - Fixed Flag Badge + Scrolling Text Only */}
        <div className="jai-hind-scroller-container">
          <div className="static-flag-badge" aria-label="Indian Flag">
            <IndianFlag width={36} height={24} />
          </div>
          <div className="scrolling-marquee-window">
            <div className="jai-hind-scroller-track">
              {marqueeTextList.concat(marqueeTextList).map((text, idx) => (
                <span key={idx} className="jai-hind-text-item">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Footer & Reader Engagement */}
        <footer className="article-footer-engagement">
          <div className="prompt-box">
            <h4>What does India @ 100 mean to you?</h4>
            <p>
              I would love to hear your thoughts, perspectives, and reflections on where India is headed towards 2047. Join the conversation on LinkedIn.
            </p>
          </div>

          <div className="share-bar">
            <span style={{ fontWeight: 600, fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
              Share this reflection:
            </span>

            <div className="share-buttons">
              <button onClick={handleLinkedInShare} className="btn-primary" aria-label="Share on LinkedIn">
                <Linkedin size={16} /> Share this article on LinkedIn →
              </button>

              <button onClick={handleCopyLink} className="btn-secondary" aria-label="Copy link">
                {copied ? <Check size={16} style={{ color: 'var(--accent-green)' }} /> : <Copy size={16} />}
                {copied ? "Link Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notice">
          Article link copied to clipboard!
        </div>
      )}
    </div>
  );
}
