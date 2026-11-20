'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { DetailedTeamMember } from '@/data/team';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}

// Generate fallback monogram initials (e.g. "Prof. (Dr.) Vijaysekhar Chellaboina" -> "VC")
function getInitials(name: string): string {
  const clean = name
    .replace(/[().]/g, '')
    .replace(/prof|dr|mr|ms|mrs|ias|r/gi, '')
    .trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'AIC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface DetailedTeamCardProps {
  member: DetailedTeamMember;
  index: number;
}

export default function DetailedTeamCard({ member, index }: DetailedTeamCardProps) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(member.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.6,
        delay: Math.min((index % 8) * 0.06, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -7 }}
      className="
        group
        relative
        w-full
        aspect-[0.74]
        overflow-hidden
        rounded-[18px]
        sm:rounded-[22px]
        bg-[#121212]
        border
        border-white/[0.06]
        hover:border-[#EB5725]/40
        shadow-[0_16px_36px_rgba(18,18,18,0.14)]
        hover:shadow-[0_24px_50px_rgba(18,18,18,0.28)]
        transition-all
        duration-300
        ease-out
        flex
        flex-col
      "
    >
      {/* ── PHOTO AREA ── */}
      <div className="absolute inset-0 overflow-hidden">
        {!imageError ? (
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
              onError={() => setImageError(true)}
              className="
                object-cover
                object-top
                grayscale
                contrast-[1.04]
                group-hover:grayscale-0
                transition-[filter]
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
            />
          </motion.div>
        ) : (
          /* Neutral Editorial Monogram Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-16 sm:pb-20 bg-gradient-to-b from-[#222226] via-[#1a1a1d] to-[#121212] p-4 text-center select-none">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/[0.06] border border-white/15 mb-2.5 transition-transform duration-300 group-hover:scale-105">
              <span className="font-marcellus text-2xl sm:text-3xl font-bold text-[#EB5725]">
                {initials}
              </span>
            </div>
            <span className="font-robotoMono text-[9px] uppercase tracking-[0.2em] text-white/40">
              AIC — JKLU
            </span>
          </div>
        )}
      </div>

      {/* ── GRADIENT OVERLAY (ensures crisp readability) ── */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          h-[62%]
          bg-gradient-to-t
          from-[#121212]
          via-[#121212]/85
          to-transparent
          pointer-events-none
        "
      />

      {/* ── LINKEDIN HOVER BUTTON (if available) ── */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${member.name}'s LinkedIn profile`}
          title={`View ${member.name}'s LinkedIn`}
          className="
            group/btn
            absolute
            top-4
            right-4
            z-30
            flex
            items-center
            justify-center
            w-8
            h-8
            sm:w-9
            sm:h-9
            rounded-full
            bg-black/60
            hover:bg-[#0077b5]
            text-[#FBF7F0]
            hover:text-white
            backdrop-blur-md
            border
            border-white/20
            hover:border-[#0077b5]
            shadow-[0_4px_16px_rgba(0,0,0,0.4)]
            opacity-0
            scale-75
            group-hover:opacity-100
            group-hover:scale-100
            transition-all
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        >
          <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      )}

      {/* ── MEMBER TEXT DETAILS (Centered at bottom) ── */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          px-3.5
          pb-4
          sm:px-4
          sm:pb-5
          text-center
          flex
          flex-col
          items-center
          justify-center
          pointer-events-none
        "
      >
        <h3
          className="
            font-marcellus
            text-[15px]
            sm:text-[16px]
            lg:text-[17px]
            leading-snug
            tracking-[-0.01em]
            text-[#EB5725]
            transition-transform
            duration-300
            ease-out
            group-hover:-translate-y-0.5
          "
        >
          {member.name}
        </h3>

        {member.role && (
          <p
            className="
              mt-1
              font-robotoMono
              text-[9.5px]
              sm:text-[10.5px]
              uppercase
              tracking-[0.08em]
              leading-snug
              text-[#E4E4E0]
              line-clamp-3
              max-w-[92%]
            "
          >
            {member.role}
          </p>
        )}

        {member.affiliation && (
          <p
            className="
              mt-0.5
              font-robotoMono
              text-[9px]
              sm:text-[9.5px]
              uppercase
              tracking-[0.14em]
              text-[#A1A1AA]
            "
          >
            {member.affiliation}
          </p>
        )}
      </div>
    </motion.article>
  );
}

