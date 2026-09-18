import { navItems } from "./navigation";
import { ThemeToggle } from "./ThemeToggle";

export const MobileMenu = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
  const linkClass = "mobile-nav-link " + (menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4");

  return (
    <div id="mobile-menu" className={"mobile-menu " + (menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} aria-hidden={!menuOpen}>
      <div className="mobile-menu-grid" aria-hidden="true" />
      <p className="section-kicker mb-6"><span>PORTFOLIO</span><span>// NAVIGATION</span></p>
      {navItems.map(([id, label, number], index) => (
        <a
          key={id}
          href={"#" + id}
          onClick={() => setMenuOpen(false)}
          className={linkClass}
          style={{ transitionDelay: menuOpen ? (index * 45) + "ms" : "0ms" }}
          tabIndex={menuOpen ? 0 : -1}
        >
          <span className="font-mono text-sm text-cyan-500">[{number}]</span>{label}
        </a>
      ))}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="mt-8" />
    </div>
  );
};
