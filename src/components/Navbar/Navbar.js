import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  const handleDarkModeToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      toggleDarkMode();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="logo-and-toggle">
          <h1 className="logo">
            <Link smooth to="/#home" onClick={handleLinkClick}>
              Phat <span className="highlight">Seyha</span>
            </Link>
          </h1>

          {/* Enhanced Dark Mode Toggle */}
          <button
            className={`darkmode-toggle ${darkMode ? "dark" : "light"} ${
              isAnimating ? "animating" : ""
            }`}
            onClick={handleDarkModeToggle}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            type="button"
          >
            <div className="toggle-track">
              <div className="toggle-thumb">
                {darkMode ? (
                  <FaMoon className="toggle-icon" />
                ) : (
                  <FaSun className="toggle-icon" />
                )}
              </div>
              <div className="toggle-bg"></div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="star" />
                ))}
              </div>
            </div>
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={handleLinkClick}>
            <Link smooth to="/#home" tabIndex={menuOpen ? 0 : -1}>
              Home
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link smooth to="/#aboutme" tabIndex={menuOpen ? 0 : -1}>
              About Me
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link smooth to="/#projects" tabIndex={menuOpen ? 0 : -1}>
              Projects
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link smooth to="/#contact" tabIndex={menuOpen ? 0 : -1}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-icons">
          <button
            className="menu-icon"
            onClick={handleMenuToggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            type="button"
          >
            {menuOpen ? (
              <FaTimes className="icon menu-toggle-icon" />
            ) : (
              <FaBars className="icon menu-toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;