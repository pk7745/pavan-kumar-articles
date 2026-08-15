import React from 'react';

export default function IndianFlag({ width = 36, height = 24, className = "" }) {
  // Generate 24 spokes for Ashoka Chakra
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 900 600" 
      width={width} 
      height={height} 
      className={`indian-flag-svg ${className}`}
      style={{ borderRadius: '3px', boxShadow: '0 1px 4px rgba(0,0,0,0.18)', display: 'inline-block', verticalAlign: 'middle' }}
      aria-label="Indian National Flag"
    >
      {/* Saffron Stripe */}
      <rect width="900" height="200" fill="#FF671F" />
      
      {/* White Stripe */}
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      
      {/* Green Stripe */}
      <rect y="400" width="900" height="200" fill="#046A38" />
      
      {/* Ashoka Chakra (Navy Blue) */}
      <g transform="translate(450, 300)">
        {/* Outer Circle */}
        <circle r="85" fill="none" stroke="#000080" strokeWidth="10" />
        {/* Inner Hub */}
        <circle r="18" fill="#000080" />
        
        {/* 24 Spokes */}
        {spokes.map((angle, idx) => (
          <g key={idx} transform={`rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="-85" stroke="#000080" strokeWidth="4" />
            <circle cx="0" cy="-85" r="4" fill="#000080" />
          </g>
        ))}
      </g>
    </svg>
  );
}
