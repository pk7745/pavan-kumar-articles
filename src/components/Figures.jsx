import React from 'react';

export function Figure1UPISpace() {
  return (
    <figure className="article-figure">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 450" width="100%" height="100%">
        <defs>
          <linearGradient id="card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDFBF7" />
            <stop offset="100%" stopColor="#F4EFE6" />
          </linearGradient>
          <linearGradient id="space-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="saffron-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <rect width="1000" height="450" fill="url(#card-grad)" rx="12" stroke="#E5E0D8" strokeWidth="1.5" />

        {/* Left Side: Digital Infrastructure */}
        <g transform="translate(60, 50)">
          <rect x="0" y="0" width="400" height="350" fill="#FFFFFF" rx="16" stroke="#E2E8F0" strokeWidth="1.5" />
          <text x="30" y="50" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#D97706" letterSpacing="1.5">DIGITAL INFRASTRUCTURE</text>
          <text x="30" y="85" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fill="#0F172A">UPI & Public Rails</text>
          
          <rect x="30" y="115" width="340" height="190" fill="#F8FAFC" rx="12" stroke="#CBD5E1" strokeWidth="1"/>
          <circle cx="100" cy="210" r="35" fill="#D97706" opacity="0.15"/>
          <circle cx="100" cy="210" r="22" fill="#D97706" opacity="0.3"/>
          <path d="M 90 210 L 98 218 L 112 202" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          
          <text x="155" y="195" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="#0F172A">₹300 Lakh Cr</text>
          <text x="155" y="220" fontFamily="Inter, sans-serif" fontSize="13" fill="#64748B">228 Billion Annual Transactions</text>
          <text x="155" y="245" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#059669">85% of Digital Payment Volume</text>
        </g>

        {/* Right Side: Space Exploration */}
        <g transform="translate(540, 50)">
          <rect x="0" y="0" width="400" height="350" fill="url(#space-grad)" rx="16"/>
          
          <circle cx="80" cy="60" r="1.5" fill="#FFFFFF" opacity="0.8"/>
          <circle cx="320" cy="90" r="2" fill="#FFFFFF" opacity="0.9"/>
          <circle cx="200" cy="140" r="1" fill="#FFFFFF" opacity="0.6"/>
          <circle cx="340" cy="280" r="1.5" fill="#FFFFFF" opacity="0.7"/>

          <text x="30" y="50" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#38BDF8" letterSpacing="1.5">FRONTIER EXPLORATION</text>
          <text x="30" y="85" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fill="#F8FAFC">ISRO · Chandrayaan & Gaganyaan</text>
          
          <path d="M 50 320 Q 200 180 350 320" fill="none" stroke="url(#saffron-glow)" strokeWidth="2" strokeDasharray="4 4"/>
          <circle cx="280" cy="210" r="45" fill="#E2E8F0" opacity="0.95"/>
          <circle cx="265" cy="195" r="8" fill="#CBD5E1"/>
          <circle cx="295" cy="225" r="12" fill="#CBD5E1"/>
          <circle cx="270" cy="235" r="6" fill="#94A3B8"/>

          <text x="30" y="270" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" fill="#38BDF8">Moon's South Pole Landing (2023)</text>
          <text x="30" y="295" fontFamily="Inter, sans-serif" fontSize="12" fill="#94A3B8">Gaganyaan Human Spaceflight Mission (2027)</text>
        </g>
      </svg>
      <figcaption>Figure 1: Digital Public Infrastructure (UPI) and Space Frontier Achievements (ISRO Chandrayaan-3 & Gaganyaan).</figcaption>
    </figure>
  );
}

export function Figure2DeepTech() {
  return (
    <figure className="article-figure">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" width="100%" height="100%">
        <defs>
          <linearGradient id="deeptech-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
        </defs>

        <rect width="1000" height="400" fill="url(#deeptech-bg)" rx="12" />

        <g stroke="#334155" strokeWidth="1" fill="none">
          <path d="M 50 100 L 250 100 L 300 150 L 500 150" />
          <path d="M 100 300 L 350 300 L 400 250 L 700 250" />
          <path d="M 600 80 L 750 80 L 800 130 L 950 130" />
          <circle cx="250" cy="100" r="4" fill="#38BDF8" />
          <circle cx="400" cy="250" r="4" fill="#818CF8" />
          <circle cx="750" cy="80" r="4" fill="#F43F5E" />
        </g>

        <g transform="translate(80, 70)">
          <rect x="0" y="0" width="380" height="260" fill="rgba(255,255,255,0.04)" rx="12" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <text x="30" y="45" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#38BDF8" letterSpacing="1.5">INDIA AI MISSION</text>
          <text x="30" y="80" fontFamily="Georgia, serif" fontSize="22" fontWeight="600" fill="#F8FAFC">Compute & Native Models</text>
          
          <text x="30" y="130" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="700" fill="#38BDF8">45,000+ GPUs</text>
          <text x="30" y="155" fontFamily="Inter, sans-serif" fontSize="13" fill="#94A3B8">Shared compute for researchers & startups</text>

          <rect x="30" y="185" width="320" height="45" fill="rgba(56, 189, 248, 0.1)" rx="8" stroke="rgba(56, 189, 248, 0.3)" />
          <text x="45" y="212" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#E0F2FE">20 Homegrown Indic AI Models Supported</text>
        </g>

        <g transform="translate(540, 70)">
          <rect x="0" y="0" width="380" height="260" fill="rgba(255,255,255,0.04)" rx="12" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <text x="30" y="45" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#F43F5E" letterSpacing="1.5">SEMICONDUCTOR MISSION</text>
          <text x="30" y="80" fontFamily="Georgia, serif" fontSize="22" fontWeight="600" fill="#F8FAFC">Fabs & Chip Design</text>

          <g transform="translate(30, 110)">
            <rect x="0" y="0" width="70" height="70" fill="#1E293B" rx="8" stroke="#F43F5E" strokeWidth="1.5"/>
            <rect x="15" y="15" width="40" height="40" fill="#334155" rx="4"/>
            <line x1="35" y1="0" x2="35" y2="15" stroke="#F43F5E" strokeWidth="2"/>
            <line x1="35" y1="55" x2="35" y2="70" stroke="#F43F5E" strokeWidth="2"/>
            <line x1="0" y1="35" x2="15" y2="35" stroke="#F43F5E" strokeWidth="2"/>
            <line x1="55" y1="35" x2="70" y2="35" stroke="#F43F5E" strokeWidth="2"/>
          </g>

          <text x="120" y="140" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#F8FAFC">Commercial Fabs</text>
          <text x="120" y="165" fontFamily="Inter, sans-serif" fontSize="13" fill="#94A3B8">First fabrication plants operational</text>

          <rect x="30" y="195" width="320" height="40" fill="rgba(244, 63, 94, 0.1)" rx="8" stroke="rgba(244, 63, 94, 0.3)" />
          <text x="45" y="220" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#FFE4E6">Commercial Tape-outs & Foundational Hardware</text>
        </g>
      </svg>
      <figcaption>Figure 2: Deep Technology Foundations — IndiaAI Mission (45,000+ GPUs) and Semiconductor Mission Fabs.</figcaption>
    </figure>
  );
}
