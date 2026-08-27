import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="soft-section min-h-screen flex items-center justify-center relative px-4 pt-16"
    >
      <RevealOnScroll>
        <div className="text-center z-10 mx-auto max-w-5xl px-4">
          <h1 className="mb-6 inline-block overflow-visible pb-3 text-6xl font-bold leading-[1.15] bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent sm:text-7xl md:text-8xl">
            Hi, I'm Aditya Agarwal
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            I'm a Senior at Virginia Tech studying Computer Science with a focus in Cybersecurity and a minor in Mathematics.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 text-white py-3 px-7 font-medium shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/70 text-slate-900 py-3 px-7 font-medium shadow-sm hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-blue-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
