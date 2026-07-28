import React from "react";
import { FaCode, FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { PERSONAL_INFO } from "../data/cvData";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-900 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-yellow-400 flex items-center justify-center text-zinc-950 font-bold">
                <FaCode />
              </div>
              <span className="font-extrabold text-lg text-white">
                Muhammad Afdhal <span className="text-yellow-400">Hanif Dwiandro</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Mahasiswa Tingkat Akhir S1 Teknik Informatika (UIN Jakarta) • Web Developer, IT Support, Management Trainee Technology & Data Candidate.
            </p>
          </div>

          {/* Nav Links & Scroll Top */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-6">
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-400 font-mono">
              <a href="#about" className="hover:text-yellow-400 transition-colors">Tentang</a>
              <a href="#experience" className="hover:text-yellow-400 transition-colors">Pengalaman</a>
              <a href="#projects" className="hover:text-yellow-400 transition-colors">Project</a>
              <a href="#skills" className="hover:text-yellow-400 transition-colors">Keahlian</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Kontak</a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl minimal-card text-zinc-400 hover:text-white hover:border-yellow-400/40 transition-all flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <FaChevronUp className="text-sm" />
            </button>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Muhammad Afdhal Hanif Dwiandro. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub className="text-base" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
              <FaLinkedin className="text-base" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-yellow-400 transition-colors">
              <FaEnvelope className="text-base" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
