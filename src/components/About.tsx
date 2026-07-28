import React, { useEffect, useRef } from "react";
import { FaLaptopCode, FaHandsHelping, FaCheckCircle, FaUserCheck, FaDraftingCompass } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { ABOUT_TEXT, PERSONAL_INFO } from "../data/cvData";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const targets = sectionRef.current.querySelectorAll(".about-card-anime");
      if (targets.length > 0) {
        animate(targets, {
          opacity: [0, 1],
          translateY: [30, 0],
          delay: stagger(150),
          duration: 800,
          ease: "outCubic",
        });
      }
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="about-card-anime opacity-0 flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-3">
            <FaUserCheck />
            <span>PROFIL PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang <span className="text-yellow-400">Muhammad Afdhal</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Pondasi teknikal yang solid dikombinasikan dengan kemampuan mengeksekusi operasional dan komunikasi yang efektif.
          </p>
        </div>

        {/* Highlight Summary Card */}
        <div className="about-card-anime opacity-0 minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaDraftingCompass className="text-yellow-400" />
                Visi & Orientasi Karir
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {ABOUT_TEXT.tech}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {ABOUT_TEXT.volunteer}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="lg:col-span-4 bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Pendidikan:</span>
                <span className="text-yellow-400 font-bold">S1 Teknik Informatika</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Status:</span>
                <span className="text-zinc-200 font-semibold">Mahasiswa Tingkat Akhir</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                <span className="text-zinc-400">Lokasi:</span>
                <span className="text-white">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Target Core Role:</span>
                <span className="text-yellow-400 font-bold">Web Dev / IT Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Core Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Pillar 1: Tech & Data Engineering */}
          <div className="about-card-anime opacity-0 minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 minimal-card-hover">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 text-xl mb-6">
              <FaLaptopCode />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              1. Engineering & Solusi Data
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Berkompetensi dalam pengembangan aplikasi web modern (React, Laravel, Supabase) serta integrasi teknologi kecerdasan buatan (Gemini AI RAG Chatbot).
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Pengembangan View Layer Laravel 4 modul dashboard akademik OBE.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Arsitektur RAG AI dengan DOM-based chunking & memori vektor EPUB Arab.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Ekstraksi, pembersihan & normalisasi data akademik KHS 6 angkatan (2020-2025).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Pengembangan BaaS Supabase PostgreSQL & CMS bisnis BumDes.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Event & Field Operations */}
          <div className="about-card-anime opacity-0 minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 minimal-card-hover">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 text-xl mb-6">
              <FaHandsHelping />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              2. Operasional & Kepemimpinan Acara
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Memiliki rekam jejak aktif dalam operasional event besar, mulai dari manajemen waktu presisi, penyelesaian krisis di panggung, hingga pengarsipan visual.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Tim Dokumentasi Utama & pengarsipan visual seminar hasil penelitian.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Precision Timekeeper untuk perlombaan Mandiri Runniversary.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Runner Main Stage & dukungan krisis operasional JAAN 2025.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                <span>Master of Ceremony (MC) & manajemen logistik konsumsi / kurban.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
