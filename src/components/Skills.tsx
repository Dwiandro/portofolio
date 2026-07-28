import React, { useEffect, useRef } from "react";
import { FaCode, FaMicrochip, FaChartLine, FaBriefcase, FaUsers, FaCamera, FaCheckCircle, FaStar } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { SKILL_CATEGORIES, SkillCategory } from "../data/cvData";

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".skill-card-anime");
      if (cards.length > 0) {
        animate(cards, {
          opacity: [0, 1],
          translateY: [25, 0],
          delay: stagger(100),
          duration: 700,
          ease: "outCubic",
        });
      }
    }
  }, []);

  const getIconForCategory = (iconName: string) => {
    switch (iconName) {
      case "Code": return <FaCode className="text-yellow-400" />;
      case "Cpu": return <FaMicrochip className="text-yellow-400" />;
      case "Activity": return <FaChartLine className="text-yellow-400" />;
      case "Briefcase": return <FaBriefcase className="text-yellow-400" />;
      case "Users": return <FaUsers className="text-yellow-400" />;
      case "Camera": return <FaCamera className="text-yellow-400" />;
      default: return <FaCode className="text-yellow-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-3">
            <FaStar />
            <span>KOMPETENSI & KEAHLIAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skill & <span className="text-yellow-400">Keahlian Utama</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Pengelompokan kompetensi teknis kecerdasan buatan, web development, analisis sistem, hingga manajemen operasional acara.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat: SkillCategory, idx) => (
            <div
              key={idx}
              className="skill-card-anime opacity-0 minimal-card p-6 rounded-2xl border border-zinc-800 minimal-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg">
                    {getIconForCategory(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Pills / List */}
                <div className="flex flex-wrap gap-2 my-4">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                        skill.highlight
                          ? "bg-zinc-950 border border-yellow-400/40 text-yellow-400 font-semibold"
                          : "bg-zinc-950 border border-zinc-800 text-zinc-300"
                      }`}
                    >
                      {skill.highlight && <FaCheckCircle className="text-yellow-400 text-[10px]" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer count */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Total Skill</span>
                <span className="text-yellow-400 font-bold">{cat.skills.length} Item</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
