export const MobileMenu = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
  const linkClass = `text-2xl font-semibold text-slate-950 dark:text-white my-4 transform ${
    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`;

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white/95 dark:bg-black/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-slate-950 dark:text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      <a href="#home" onClick={() => setMenuOpen(false)} className={linkClass}>
        Home
      </a>
      <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass}>
        About
      </a>
      <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClass}>
        Projects
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass}>
        Contact
      </a>
      <button
        type="button"
        onClick={toggleTheme}
        className={`mt-4 h-11 w-11 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 shadow-sm hover:border-blue-400 hover:text-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "LT" : "DK"}
      </button>
    </div>
  );
};
