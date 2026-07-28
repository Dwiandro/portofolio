import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaLaptopCode, FaBuilding, FaUserTag } from "react-icons/fa";
import { animate, stagger } from "animejs";
import { IT_WORK_EXPERIENCES, VOLUNTEER_EXPERIENCES, ExperienceItem } from "../data/cvData";

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"work" | "volunteer">("work");
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".exp-item-anime");
      if (items.length > 0) {
        animate(items, {
          opacity: [0, 1],
          translateX: [-20, 0],
          delay: stagger(100),
          duration: 700,
          ease: "outCubic",
        });
      }
    }
  }, [activeTab]);

  return (
    <section id="experience" className="py-20 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-xs font-mono mb-3">
            <FaBriefcase />
            <span>REKAM JEJAK PROFESIONAL & VOLUNTEER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman <span className="text-yellow-400">Kerja & Volunteer</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Pengalaman nyata dalam pengembangan perangkat lunak, sistem data akademik, serta manajemen operasional lapangan.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "work"
                  ? "bg-yellow-400 text-zinc-950 font-bold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FaLaptopCode className="text-base" />
              <span>IT & Work Experience ({IT_WORK_EXPERIENCES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("volunteer")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "volunteer"
                  ? "bg-yellow-400 text-zinc-950 font-bold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FaHandsHelping className="text-base" />
              <span>Volunteer & Operations ({VOLUNTEER_EXPERIENCES.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative border-l-2 border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {(activeTab === "work" ? IT_WORK_EXPERIENCES : VOLUNTEER_EXPERIENCES).map((exp: ExperienceItem) => (
            <div key={exp.id} className="exp-item-anime opacity-0 relative group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 group-hover:bg-zinc-950"></div>
              </div>

              {/* Experience Card */}
              <div className="minimal-card p-6 sm:p-8 rounded-2xl border border-zinc-800 minimal-card-hover relative">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="px-2.5 py-0.5 rounded-md bg-zinc-950 border border-yellow-400/40 text-yellow-400 text-[11px] font-mono font-semibold">
                        {exp.badge}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        {exp.programOrEvent}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-yellow-400 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <p className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mt-1">
                      <FaBuilding className="text-yellow-400" />
                      <span>{exp.organization}</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end text-xs font-mono text-zinc-400 space-y-1 shrink-0">
                    <span className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 text-yellow-400 font-semibold">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-zinc-400">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets List */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <FaCheckCircle className="text-yellow-400 mt-1 shrink-0 text-sm" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Tech / Focus Badges */}
                {exp.technologies && (
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 mr-1">
                      <FaUserTag /> Tech Stack:
                    </span>
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {exp.highlights && (
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 mr-1">
                      <FaUserTag /> Key Focus:
                    </span>
                    {exp.highlights.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-950 text-yellow-400 text-xs font-mono border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
