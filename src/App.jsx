import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const handleLoadingComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } overflow-x-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_46%,#ffffff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#000000_48%,#020617_100%)] dark:text-gray-100`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
