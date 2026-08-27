import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/75 dark:bg-black/55 backdrop-blur-2xl border-b border-slate-200/70 dark:border-white/10 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-slate-950 hover:text-blue-500 dark:text-white"
          >
            Aditya<span className="text-blue-500"> Agarwal</span>
          </a>

          <button
            type="button"
            className="relative z-40 h-10 w-10 cursor-pointer rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <span aria-hidden="true" className="text-xl">
              =
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="nav-link text-slate-600 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link text-slate-600 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="nav-link text-slate-600 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link text-slate-600 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-500/50"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "LT" : "DK"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
