import React, { useState, useEffect, useRef } from "react";
import { FaLaptopCode, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { PROJECTS_DATA, ProjectItem } from "../data/cvData";
import ProjectModal from "./ProjectModal";

// Asset imports
import ragImg from "../assets/projects/rag-chatbot.png";
import sponsormatchImg from "../assets/projects/sponsormatch.png";
import project1Img from "../assets/projects/project-1.png";
import project2Img from "../assets/projects/project-2.png";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "AI & Data", "Web Development", "B2B Platform"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".project-card-anime");
      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateY: [20, 0],
          scale: [0.97, 1],
          delay: stagger(100),
          duration: 600,
          ease: "outCubic",
        });
      }
    }
  }, [selectedCategory]);

  const getImageForProject = (project: ProjectItem) => {
    if (project.id === "proj-1") return ragImg;
    if (project.id === "proj-2") return sponsormatchImg;
    if (project.id === "proj-3") return project1Img;
    return project2Img;
  };

  return (
    <section id="projects" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-3">
            <FaLaptopCode />
            <span>PORTOFOLIO SOLUSI TEKNOLOGI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Project & <span className="text-yellow-400">Inovasi Perangkat Lunak</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Aplikasi web fullstack, RAG AI Chatbot, CMS bisnis desa, dan platform matching B2B yang dikembangkan sesuai rekam jejak CV.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-zinc-950 font-bold shadow"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const projectImg = getImageForProject(project);

            return (
              <div
                key={project.id}
                className="project-card-anime opacity-0 minimal-card rounded-2xl border border-zinc-800 overflow-hidden flex flex-col minimal-card-hover group"
              >
                {/* Project Image Banner */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
                  <img
                    src={projectImg}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                  
                  {/* Category & Type Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-zinc-950/90 border border-yellow-400/40 text-yellow-400 font-mono text-[11px] font-bold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-950/90 border border-zinc-800 text-zinc-300 font-mono text-[11px]">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-300 text-[11px] font-mono border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 group/btn"
                    >
                      <FaInfoCircle className="text-sm" />
                      <span>Lihat Arsitektur & Detail</span>
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>

                    <a
                      href="https://github.com/Dwiandro"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
                      title="Lihat GitHub Repo"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
