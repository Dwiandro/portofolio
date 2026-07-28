import React, { useEffect, useRef } from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBuilding } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { PERSONAL_INFO } from "../data/cvData";

const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".edu-anime");
      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: stagger(120),
          duration: 700,
          ease: "outCubic",
        });
      }
    }
  }, []);

  return (
    <section id="education" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-3">
            <FaGraduationCap />
            <span>PENDIDIKAN & INFORMASI AKADEMIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pendidikan & <span className="text-yellow-400">Status Akademis</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Latar belakang akademis resmi sesuai dengan dokumen CV terbaru.
          </p>
        </div>

        {/* Education & Info Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Academic Card */}
          <div className="edu-anime opacity-0 lg:col-span-8 minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 minimal-card-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-lg bg-zinc-950 border border-yellow-400/40 text-yellow-400 text-xs font-mono font-bold">
                  S1 Teknik Informatika (Bachelor of Informatics Engineer)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800">
                  <FaCalendarAlt className="text-yellow-400" />
                  {PERSONAL_INFO.education.period}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4">
                Bachelor of Informatics Engineer
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300 bg-zinc-950 p-5 rounded-xl border border-zinc-800">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <FaAward className="text-yellow-400" />
                  <span>Highlight Akademis & Solusi Perangkat Lunak:</span>
                </div>
                <p>
                  • Berfokus pada penguasaan bahasa pemrograman JavaScript, Python, PHP, dan Java untuk solusi digitalisasi operasional bisnis.
                </p>
                <p>
                  • Mengembangkan aplikasi fullstack RAG AI (Gemini AI), CMS Admin Dashboard (BumDes Sirah Dayueh), dan 4 Modul View Layer Dashboard Akademik OBE Laravel.
                </p>
                <p>
                  • Memiliki rekam jejak pembersihan (cleansing) dan normalisasi data rekam akademik KHS 6 angkatan mahasiswa (2020–2025).
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Status Akademis:</span>
              <span className="text-yellow-400 font-bold">Mahasiswa Tingkat Akhir (Aktif)</span>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="edu-anime opacity-0 lg:col-span-4 minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaBuilding className="text-yellow-400" />
                Informasi Kontak & Domisili
              </h3>

              <div className="space-y-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-400 block font-mono">Domisili</span>
                      <span className="text-xs font-bold text-white">Ciputat, Tangerang Selatan</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-yellow-400 font-semibold">Banten</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400">
                      <FaAward />
                    </div>
                    <div>
                      <span className="text-[11px] text-zinc-400 block font-mono">Kesiapan Karir</span>
                      <span className="text-xs font-bold text-white">Web Dev / IT Support </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-yellow-400 font-semibold">Siap Kerja</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 text-center">
              Informasi terverifikasi dari CV terbaru resmi.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
