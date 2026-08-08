import React, { useState, useEffect, useRef } from "react";
import { FaCode, FaRocket, FaFileDownload, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaAward, FaBolt, FaTerminal, FaDatabase, FaBrain } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { PERSONAL_INFO } from "../data/cvData";
import profileImg from "../assets/profile.png";

interface HeroProps {
  onOpenCvModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeFocus, setActiveFocus] = useState<"tech" | "ops">("tech");
  const heroRef = useRef<HTMLDivElement>(null);

  // Stat animated values state
  const [counts, setCounts] = useState<{ [key: number]: number }>({ 0: 0, 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    if (heroRef.current) {
      // 1. Entrance Stagger for text & elements
      const staggerTargets = heroRef.current.querySelectorAll(".hero-stagger");
      if (staggerTargets.length > 0) {
        animate(staggerTargets, {
          translateY: [30, 0],
          opacity: [0, 1],
          delay: stagger(100, { start: 100 }),
          duration: 900,
          ease: "outCubic",
        });
      }

      // 2. Profile Card Scale-In
      const cardTarget = heroRef.current.querySelector(".hero-card-anime");
      if (cardTarget) {
        animate(cardTarget, {
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 1000,
          delay: 300,
          ease: "outExpo",
        });
      }

      // 3. Floating Loop Animation for Floating Badges
      const floatingItems = heroRef.current.querySelectorAll(".hero-floating-badge");
      if (floatingItems.length > 0) {
        animate(floatingItems, {
          translateY: [-6, 6],
          rotate: [-2, 2],
          duration: 3000,
          alternate: true,
          delay: stagger(400),
          direction: "alternate",
          loop: true,
          ease: "inOutSine",
        });
      }

      // 4. Stat Counter Numbers Animation
      PERSONAL_INFO.stats.forEach((stat, idx) => {
        const obj = { val: 0 };
        animate(obj, {
          val: [0, stat.value],
          round: 1,
          duration: 1800,
          delay: 400 + idx * 150,
          ease: "outExpo",
          onUpdate: () => {
            setCounts((prev) => ({ ...prev, [idx]: obj.val }));
          },
        });
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-zinc-950 overflow-hidden">

      {/* Clean Minimalist Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Status Tag */}
            <div className="hero-stagger opacity-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-6 shadow">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-400 -ml-4"></span>
              <span>WEB DEVELOPER / IT SUPPORT & CREW VOLUNTEER</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="hero-stagger opacity-0 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Muhammad Afdhal <br className="hidden sm:inline" />
              <span className="text-yellow-400">Hanif Dwiandro</span>
            </h1>

            {/* Subtitle Roles */}
            <p className="hero-stagger opacity-0 text-base sm:text-lg font-semibold text-zinc-300 mb-6 flex flex-wrap items-center gap-2 font-mono">
              <span className="text-yellow-400">Web Developer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-200">IT Support</span>
              <span className="text-zinc-600">•</span>
              <span className="text-yellow-400">Crew Volunteer</span>
            </p>

            {/* Perspective Switcher */}
            <div className="hero-stagger opacity-0 flex items-center gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl mb-6 max-w-full">
              <button
                onClick={() => setActiveFocus("tech")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeFocus === "tech"
                  ? "bg-yellow-400 text-zinc-950 font-bold shadow"
                  : "text-zinc-400 hover:text-white"
                  }`}
              >
                <FaCode />
                <span>Teknologi & Data</span>
              </button>
              <button
                onClick={() => setActiveFocus("ops")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeFocus === "ops"
                  ? "bg-yellow-400 text-zinc-950 font-bold shadow"
                  : "text-zinc-400 hover:text-white"
                  }`}
              >
                <FaBolt />
                <span>Crew Volunteer & Ops</span>
              </button>
            </div>

            {/* Dynamic Bio Card */}
            <div className="hero-stagger opacity-0 minimal-card p-5 sm:p-6 rounded-2xl border border-zinc-800 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 relative">
              {activeFocus === "tech" ? (
                <p>
                  Mahasiswa tingkat akhir yang berorientasi pada solusi teknologi dengan fondasi kuat di <strong className="text-yellow-400 font-semibold">JavaScript, Python, PHP, Java, React.js, Laravel, Supabase, & Gemini AI</strong>. Memiliki rekam jejak dalam mendigitalisasi operasional bisnis dan dasbor akademik berbasis Outcome-Based Education (OBE).
                </p>
              ) : (
                <p>
                  Mahasiswa tingkat akhir berlatar belakang IT dengan antusiasme tinggi pada <strong className="text-yellow-400 font-semibold">Media Support, Timekeeping Presisi, Runner Main Stage, dan Event Operations Volunteer</strong>. Terbiasa menerjemahkan masalah di lapangan menjadi solusi terukur dengan manajemen waktu yang ketat.
                </p>
              )}
            </div>

            {/* Meta Info Badges */}
            <div className="hero-stagger opacity-0 flex flex-wrap items-center gap-4 text-xs text-zinc-400 mb-8 font-mono">
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-yellow-400" /> {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <FaGraduationCap className="text-yellow-400" /> S1 Teknik Informatika
              </span>
            </div>

            {/* Action CTAs */}
            <div className="hero-stagger opacity-0 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-yellow-400 text-zinc-950 font-bold text-sm hover:bg-yellow-300 transition-all shadow-md hover:-translate-y-0.5"
              >
                <FaRocket />
                <span>Lihat Project Utama</span>
              </a>

              <button
                onClick={onOpenCvModal}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl minimal-card text-white font-semibold text-sm hover:bg-zinc-900 border border-zinc-800 transition-all hover:border-yellow-400/40 hover:-translate-y-0.5"
              >
                <FaFileDownload className="text-yellow-400" />
                <span>Unduh / Review CV</span>
              </button>

              <a
                href="#contact"
                className="p-3.5 rounded-xl minimal-card text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/40 transition-all"
                title="Hubungi via Email / WhatsApp"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Profile Card & Floating Badge Animations */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">

            {/* Floating Tech Badges */}
            <div className="hero-floating-badge absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-yellow-400/50 text-yellow-400 font-mono text-xs shadow-lg backdrop-blur-md">
              <FaBrain /> <span>Gemini RAG AI</span>
            </div>

            <div className="hero-floating-badge absolute top-1/2 -right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-700 text-zinc-200 font-mono text-xs shadow-lg backdrop-blur-md">
              <FaTerminal /> <span>Laravel & Supabase</span>
            </div>

            {/* Profile Card Container */}
            <div className="hero-card-anime opacity-0 relative w-full max-w-sm">
              <div className="minimal-card p-4 rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 group">
                  <img
                    src={profileImg}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Badge Top */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800 text-yellow-400 text-[11px] font-mono flex items-center gap-1.5">
                    <FaCode /> <span>Fullstack & RAG AI</span>
                  </div>

                  {/* Overlay Badge Bottom */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-200 text-xs font-sans flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></span>
                    <span>Status: Tingkat Akhir</span>
                  </div>
                </div>

                {/* Card Footnote Specs */}
                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>September 2022 - Present</span>
                  <span className="text-yellow-400 font-bold">Informatics Eng.</span>
                </div>
              </div>

              {/* Animated Stat Counter Widgets */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {PERSONAL_INFO.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="minimal-card p-3.5 rounded-xl border border-zinc-800 flex flex-col items-center justify-center text-center hover:border-yellow-400/50 transition-colors"
                  >
                    <span className="text-xl sm:text-2xl font-extrabold text-yellow-400 font-mono">
                      {counts[idx] ?? 0}{stat.suffix}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-medium leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
