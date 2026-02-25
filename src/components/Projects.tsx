import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">Projects</h2>

      <div className="flex flex-col items-center">
        <p className="mb-12 max-w-2xl text-center text-neutral-400">
          Here are some of the projects I have worked on, covering both frontend
          and backend development.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-2/3">
              <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
