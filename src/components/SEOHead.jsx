import React, { useEffect } from 'react';

export default function SEOHead({
  title = "Pavan Kumar S | Articles, Ideas & Reflections",
  description = "Personal articles and reflections by Pavan Kumar S on technology, India, development, learning and the future.",
  canonicalUrl = "https://pavan-kumar-articles.vercel.app/",
  ogType = "website",
  publishedDate,
  modifiedDate,
  author = "Pavan Kumar S",
  articleJsonLd = null
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update meta tag
    const setMeta = (nameAttr, attrValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'author', author);
    setMeta('name', 'robots', 'index, follow');

    // 3. OpenGraph Social Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:site_name', 'Pavan Kumar S');

    // 4. Twitter / X Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Article / Website Structured Data
    let script = document.querySelector('script[id="json-ld-schema"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('id', 'json-ld-schema');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    const schemaData = articleJsonLd || {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Pavan Kumar S",
      "url": canonicalUrl,
      "author": {
        "@type": "Person",
        "name": author,
        "jobTitle": "BCA Student & Software Developer"
      },
      "description": description
    };

    script.textContent = JSON.stringify(schemaData);

  }, [title, description, canonicalUrl, ogType, publishedDate, modifiedDate, author, articleJsonLd]);

  return null;
}
