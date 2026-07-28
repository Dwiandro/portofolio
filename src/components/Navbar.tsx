import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes, FaCode } from "react-icons/fa";
import { animate } from "animejs";
import { PERSONAL_INFO } from "../data/cvData";

interface NavbarProps {
  onOpenCvModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      animate(navRef.current, {
        translateY: [-40, 0],
        opacity: [0, 1],
        duration: 800,
        ease: "outExpo",
      });
    }
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Project", href: "#projects" },
    { name: "Keahlian", href: "#skills" },
    { name: "Pendidikan", href: "#education" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 border-b border-zinc-800 py-3 shadow-lg shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center text-zinc-950 font-bold group-hover:scale-105 transition-transform shadow-md shadow-yellow-400/10">
              <FaCode className="text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-yellow-400 transition-colors">
                Afdhal <span className="text-yellow-400">Dwiandro</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Web Dev & Operations
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/90 p-1.5 rounded-full border border-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 text-xs font-semibold hover:bg-yellow-400 hover:text-zinc-950 transition-all shadow-sm"
            >
              <FaFileAlt />
              <span>Lihat CV</span>
            </button>

            <div className="h-4 w-[1px] bg-zinc-800"></div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-zinc-400 hover:text-yellow-400 hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-400/10 border border-yellow-400/40 text-yellow-400 text-xs font-semibold"
            >
              <FaFileAlt />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-yellow-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-zinc-200 hover:text-yellow-400 hover:bg-zinc-900 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-[1px] bg-zinc-800 my-2"></div>
            <div className="flex items-center justify-around pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
