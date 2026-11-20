'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import DetailedTeamCard from '@/components/team/DetailedTeamCard';
import TeamHeroVisual from '@/components/team/TeamHeroVisual';
import {
  BOARD_OF_DIRECTORS,
  AIC_CORE_TEAM,
} from '@/data/team';

export default function TeamPage() {
  const directorsRow1 = BOARD_OF_DIRECTORS.slice(0, 4);
  const directorsRow2 = BOARD_OF_DIRECTORS.slice(4);

  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white relative overflow-hidden">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── Page Content Container ── */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 pb-20 sm:pb-28">
        {/* ================================================================
            PAGE HERO / HEADER (2-Column: Left Copy, Right Properly-Aligned Simple Visual)
        ================================================================= */}
        <section className="pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 border-b border-[#E4E4E0]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* ── LEFT COLUMN: Text Copy ── */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="font-robotoMono text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#EB5725]">
                  TEAM
                </span>
                <span className="inline-block w-8 sm:w-10 h-px bg-[#EB5725]" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-marcellus text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal leading-[1.08] tracking-[-0.02em] text-[#121212]"
              >
                Team, <span className="text-[#EB5725]">AIC-JKLU</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-robotoMono text-xs sm:text-sm text-slateMuted tracking-wide max-w-xl leading-relaxed"
              >
                The people driving innovation, incubation and entrepreneurship at AIC-JKLU.
              </motion.p>
            </div>

            {/* ── RIGHT COLUMN: Simple Team Graphic (Properly Aligned with Container) ── */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
              <TeamHeroVisual />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 1: LEADERSHIP / BOARD OF DIRECTORS
        ================================================================= */}
        <section className="pt-12 sm:pt-16 lg:pt-20">
          {/* Section Header */}
          <div className="mb-4">
            <span className="font-robotoMono text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#EB5725]">
              LEADERSHIP
            </span>
            <span className="inline-block w-8 sm:w-10 h-px bg-[#EB5725] ml-2 align-middle" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start mb-8 sm:mb-10">
            <div className="lg:col-span-6">
              <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-[-0.02em] text-[#121212]">
                Board of <span className="text-[#EB5725]">Directors</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-center">
              <div className="border-l-2 border-[#EB5725]/60 pl-4 sm:pl-5">
                <p className="font-robotoMono text-xs sm:text-[13px] text-slateMuted leading-relaxed max-w-lg">
                  A distinguished board that provides strategic direction, governance and guidance to strengthen the incubation ecosystem at AIC-JKLU.
                </p>
              </div>
            </div>
          </div>

          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {directorsRow1.map((member, index) => (
              <DetailedTeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Row 2: 3 cards horizontally centered (matching design) */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-5 sm:gap-6">
            {directorsRow2.map((member, index) => (
              <div
                key={member.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <DetailedTeamCard member={member} index={index + 4} />
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================
            SECTION 2: OUR TEAM / CORE TEAM
        ================================================================= */}
        <section className="pt-16 sm:pt-20 lg:pt-24">
          {/* Section Header */}
          <div className="mb-4">
            <span className="font-robotoMono text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#EB5725]">
              OUR TEAM
            </span>
            <span className="inline-block w-8 sm:w-10 h-px bg-[#EB5725] ml-2 align-middle" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start mb-8 sm:mb-10">
            <div className="lg:col-span-6">
              <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-[-0.02em] text-[#121212]">
                Team, <span className="text-[#EB5725]">AIC-JKLU</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-center">
              <div className="border-l-2 border-[#EB5725]/60 pl-4 sm:pl-5">
                <p className="font-robotoMono text-xs sm:text-[13px] text-slateMuted leading-relaxed max-w-lg">
                  The core team that manages incubation operations, supports startups, and drives AIC-JKLU&apos;s programs and initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {AIC_CORE_TEAM.map((member, index) => (
              <DetailedTeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
