import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Copy, Linkedin, Check, ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import SEOHead from '../components/SEOHead';
import IndianFlag from '../components/IndianFlag';
import { Figure1UPISpace, Figure2DeepTech } from '../components/Figures';

export default function ArticlePage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Match article by slug or default to flagship article
  const article = articles.find((a) => a.slug === slug) || articles[0];
  const currentUrl = `https://pavankumar.dev/articles/${article.slug}`;

  // Scroll Progress Indicator
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setReadingProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

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

  // Marquee text list
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

  // Split HTML at figure placement markers
  const contentParts = article.contentHtml.split('<!-- FIGURE_1 -->');
  const part1 = contentParts[0];
  const remainingParts = contentParts[1] ? contentParts[1].split('<!-- FIGURE_2 -->') : ["", ""];
  const part2 = remainingParts[0];
  const part3 = remainingParts[1] || "";

  return (
    <div className="page-container" style={{ position: 'relative' }}>
      {/* Top Reading Progress Line */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          backgroundColor: 'var(--accent-saffron)',
          width: `${readingProgress}%`,
          zIndex: 100,
          transition: 'width 0.1s ease-out'
        }}
        aria-hidden="true"
      />

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
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '1.75rem' }}>
          <Link to="/articles" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>
            <ArrowLeft size={15} /> Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-header-meta">
            <span className="category-tag">{article.category}</span>
            <span aria-hidden="true">•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Calendar size={14} /> {article.date}
            </span>
            <span aria-hidden="true">•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="article-main-title">
            <span>India at 80: From Independence to a Vision for the Future</span>
            <IndianFlag width={42} height={28} />
          </h1>

          <div className="author-byline">
            <div className="author-avatar" aria-hidden="true">PK</div>
            <div>
              <div className="author-info-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{article.author}</span>
                <IndianFlag width={20} height={13} />
              </div>
              <div className="author-info-sub">{article.authorRole}</div>
            </div>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="article-hero-visual">
          <img src={article.heroImage} alt={article.heroAlt} loading="eager" />
        </div>

        {/* Editorial Body */}
        <div className="editorial-body">
          <div dangerouslySetInnerHTML={{ __html: part1 }} />
          {contentParts[1] && <Figure1UPISpace />}
          {part2 && <div dangerouslySetInnerHTML={{ __html: part2 }} />}
          {remainingParts[1] && <Figure2DeepTech />}
          {part3 && <div dangerouslySetInnerHTML={{ __html: part3 }} />}
        </div>

        {/* Scrolling Jai Hind Banner - Fixed Flag Badge + Scrolling Text Only */}
        <div className="jai-hind-scroller-container">
          <div className="static-flag-badge" title="Indian National Flag">
            <IndianFlag width={32} height={21} />
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
              <button onClick={handleLinkedInShare} className="btn-primary" aria-label="Share this article on LinkedIn">
                <Linkedin size={16} /> Share this article on LinkedIn →
              </button>

              <button onClick={handleCopyLink} className="btn-secondary" aria-label="Copy link to clipboard">
                {copied ? <Check size={16} style={{ color: 'var(--accent-green)' }} /> : <Copy size={16} />}
                {copied ? "Link Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notice" role="status">
          Article link copied to clipboard!
        </div>
      )}
    </div>
  );
}
