import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="soft-section min-h-screen flex items-center justify-center px-4 py-28"
    >
      <RevealOnScroll>
        <div className="w-full min-w-[300px] md:w-[560px] sm:w-2/3 rounded-lg border border-slate-200/80 bg-white/80 p-8 text-center shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-700 dark:text-white text-lg mb-4">
            Feel free to reach out to me at{" "}
            <a
              href="mailto:your.email@example.com"
              className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              adityagarwal05@gmail.com
            </a>
          </p>
          <a
            href="/Portfolio/Resume_Aditya_Agarwal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-full bg-blue-500 text-white py-3 px-7 font-medium shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/30"
          >
            View My Resume
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
