import React, { useEffect, useRef } from "react";
import { FaTimes, FaCode, FaCheckCircle, FaLayerGroup, FaRocket } from "react-icons/fa";
import { animate } from "animejs";
import { ProjectItem } from "../data/cvData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project && modalBoxRef.current) {
      animate(modalBoxRef.current, {
        opacity: [0, 1],
        scale: [0.93, 1],
        duration: 400,
        ease: "outBack",
      });
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        ref={modalBoxRef}
        className="modal-box-anime opacity-0 relative w-full max-w-3xl minimal-card rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="text-base" />
        </button>

        {/* Modal Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
          <img
            src={`/src/assets/projects/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
          
          {/* Category Pill */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-zinc-950 border border-yellow-400/40 text-yellow-400 font-mono text-xs font-bold">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs">
              {project.type}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.detailedDesc}
            </p>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FaCode className="text-yellow-400" />
              Teknologi & Framework
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-200 text-xs font-mono border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <FaLayerGroup className="text-yellow-400" />
              Fitur & Pencapaian Utama (Berdasarkan CV)
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <FaCheckCircle className="text-yellow-400 mt-1 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl minimal-card text-zinc-300 text-xs font-semibold hover:bg-zinc-800 transition-colors"
            >
              Tutup Modal
            </button>
            <a
              href="https://github.com/Dwiandro"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 text-zinc-950 text-xs font-bold hover:bg-yellow-300 transition-colors shadow"
            >
              <FaRocket />
              <span>Lihat Repository GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
