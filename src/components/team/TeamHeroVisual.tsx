'use client';

import { motion } from 'framer-motion';

export default function TeamHeroVisual() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] aspect-[400/220] select-none">
      <svg
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter id="team-card-shadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#121212" floodOpacity="0.07" />
          </filter>
        </defs>

        {/* ── 1. Soft Beige Architectural Arch (Clean & Minimal) ── */}
        <motion.path
          d="M 80 220 C 80 115, 160 30, 260 30 C 290 30, 320 38, 350 52 L 350 220 Z"
          fill="#EFE3D5"
          fillOpacity="0.9"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── 2. Brand Orange Semicircle / Circle ── */}
        <motion.circle
          cx="305"
          cy="130"
          r="62"
          fill="#EB5725"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── 3. Minimalist Team & Unity Emblem ── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          filter="url(#team-card-shadow)"
        >
          {/* Clean White Circular Badge */}
          <circle
            cx="225"
            cy="130"
            r="54"
            fill="#FFFFFF"
            stroke="#E4E4E0"
            strokeWidth="1.5"
          />

          {/* Left Teammate (Clean Silhouette) */}
          <circle cx="201" cy="116" r="7.5" fill="#52525B" />
          <path
            d="M 187 142 C 187 130, 195 127, 201 127 C 207 127, 214 130, 215 142"
            stroke="#52525B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right Teammate (Clean Silhouette) */}
          <circle cx="249" cy="116" r="7.5" fill="#52525B" />
          <path
            d="M 235 142 C 236 130, 243 127, 249 127 C 255 127, 263 130, 263 142"
            stroke="#52525B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Center Leader / Core Teammate (in Brand Orange) */}
          <circle cx="225" cy="108" r="9" fill="#EB5725" />
          <path
            d="M 208 145 C 208 129, 217 124, 225 124 C 233 124, 242 129, 242 145"
            stroke="#EB5725"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Collaboration Unity Arc */}
          <path
            d="M 199 152 C 213 157, 237 157, 251 152"
            stroke="#EB5725"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
        </motion.g>
      </svg>
    </div>
  );
}

