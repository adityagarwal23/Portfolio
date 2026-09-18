import { MoonIcon, SunIcon } from "./Icons";

export const ThemeToggle = ({ theme, toggleTheme, className = "" }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className={"theme-toggle " + className}
    aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
    title={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
  >
    <span className={"theme-icon " + (theme === "light" ? "is-active" : "")}><SunIcon /></span>
    <span className={"theme-icon " + (theme === "dark" ? "is-active" : "")}><MoonIcon /></span>
  </button>
);
