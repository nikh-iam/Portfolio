import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({
  activeSection,
  setActiveSection,
  toggleTheme,
  theme,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="nav-bar">
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <button
          className={`nav ${activeSection === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          Home
        </button>
        <button
          className={`nav ${activeSection === "works" ? "active" : ""}`}
          onClick={() => handleNavClick("works")}
        >
          Works
        </button>
        <button
          className={`nav ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </button>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
      </div>
    </div>
  );
}
