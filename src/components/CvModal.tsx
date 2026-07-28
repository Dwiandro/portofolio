import React, { useEffect, useRef } from "react";
import { FaTimes, FaPrint, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { animate } from "animejs";
import { PERSONAL_INFO, ABOUT_TEXT, IT_WORK_EXPERIENCES, VOLUNTEER_EXPERIENCES, PROJECTS_DATA, SKILL_CATEGORIES } from "../data/cvData";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalBoxRef.current) {
      animate(modalBoxRef.current, {
        opacity: [0, 1],
        scale: [0.93, 1],
        duration: 400,
        ease: "outBack",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        ref={modalBoxRef}
        className="cv-modal-anime opacity-0 relative w-full max-w-4xl minimal-card rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Actions */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-zinc-700"></span>
            <span className="w-3 h-3 rounded-full bg-zinc-700"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-mono text-zinc-400 ml-2">CV Preview Document</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-zinc-950 font-bold text-xs hover:bg-yellow-300 transition-colors shadow"
            >
              <FaPrint />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="text-base" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-zinc-950 text-zinc-200 text-xs sm:text-sm font-sans" id="printable-cv">
          
          {/* Header CV */}
          <div className="text-center pb-6 border-b border-zinc-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-yellow-400 font-mono font-bold text-xs sm:text-sm mt-1 uppercase tracking-wider">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400 mt-3">
              <span className="flex items-center gap-1"><FaMapMarkerAlt /> {PERSONAL_INFO.location}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaPhone /> {PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaEnvelope /> {PERSONAL_INFO.email}</span>
            </div>
            <div className="flex justify-center gap-4 text-xs font-mono text-yellow-400 mt-2">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                {PERSONAL_INFO.linkedin}
              </a>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest font-mono border-b border-zinc-800 pb-1 mb-2">
              ABOUT ME
            </h2>
            <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
              {ABOUT_TEXT.tech}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest font-mono border-b border-zinc-800 pb-1 mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {IT_WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline flex-wrap font-bold text-white text-xs sm:text-sm">
                    <span>{exp.role} <span className="font-normal text-zinc-400">({exp.programOrEvent})</span></span>
                    <span className="font-mono text-yellow-400 text-xs">{exp.period}</span>
                  </div>
                  <div className="text-zinc-400 font-mono text-[11px]">{exp.organization}</div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-1 text-xs">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest font-mono border-b border-zinc-800 pb-1 mb-3">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-white text-xs sm:text-sm">
                    <span>{proj.title} <span className="text-xs font-mono font-normal text-zinc-400">({proj.type})</span></span>
                    <span className="font-mono text-yellow-400 text-xs">{proj.stack.join(", ")}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-1 text-xs">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest font-mono border-b border-zinc-800 pb-1 mb-3">
              VOLUNTEER EXPERIENCE
            </h2>
            <div className="space-y-4">
              {VOLUNTEER_EXPERIENCES.map((vol) => (
                <div key={vol.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-white text-xs sm:text-sm">
                    <span>{vol.role} <span className="font-normal text-zinc-400">({vol.programOrEvent})</span></span>
                    <span className="font-mono text-yellow-400 text-xs">{vol.period}</span>
                  </div>
                  <div className="text-zinc-400 font-mono text-[11px]">{vol.organization}</div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 pl-1 text-xs">
                    {vol.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest font-mono border-b border-zinc-800 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline font-bold text-white text-xs sm:text-sm">
              <span>{PERSONAL_INFO.education.degree}</span>
              <span className="font-mono text-yellow-400 text-xs">{PERSONAL_INFO.education.period}</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest font-mono border-b border-zinc-800 pb-1 mb-3">
              SKILLS
            </h2>
            <div className="space-y-2">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-bold text-white">{cat.category}: </span>
                  <span className="text-zinc-300">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CvModal;
