import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "ATM Machine",
      description:
        "Simulated a fully functional ATM system in Java, supporting account balance checking, cash withdrawals, deposits, and transaction history.",
      impact:
        "Allowed for a central app to track multiple accounts and expenses.",
      tech: ["Java"],
    },
    {
      title: "Restaurant Menu",
      description:
        "Developed a native Android restaurant menu application in Kotlin to digitize menus for small restaurants.",
      impact:
        "Eliminates the need for paper menus, with future iterations planned around food recommendations based on customer needs and preferences.",
      tech: ["Kotlin", "Java"],
    },
  ];

  return (
    <section
      id="projects"
      className="soft-section min-h-screen flex items-center justify-center px-4 py-28"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600 dark:text-gray-400">
            Practical builds with clear use cases, concise technical choices, and room to grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group p-7 rounded-lg bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    Built
                  </span>
                </div>
                <p className="text-slate-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <p className="mb-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">impact:</span>{" "}
                  {project.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-600 dark:text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
