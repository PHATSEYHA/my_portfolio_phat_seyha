import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile1.jpg";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    document.body.classList.remove("light");
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <section className="about" id="aboutme">
      <div className="about-container">
        <div
          className="about-image"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="image-wrapper">
            <img
              src={profilePic}
              alt="Portrait of Phat Seyha"
              className={hovering ? "hovering" : ""}
            />
            <div className="glow-effect"></div>
          </div>
        </div>
        <div className="about-text">
          <h2>
            <span className="highlight">About</span> Me
          </h2>
          <div className="text-content">
            <p>
              I’m a <span className="highlight">Web Developer</span> with
              experience in both front-end and back-end development,
              specializing in building and redesigning websites to improve
              functionality and user experience. While I’m skilled across the
              full stack, my core strength lies in back-end development using
              PHP and Laravel, supported by proficiency in HTML, CSS,
              JavaScript, Vue.js, and MySQL.
            </p>
            <p>
              My portfolio includes a variety of projects such as e-commerce
              platforms, budgeting tools, and reservation systems. I’m also
              experienced with Git for version control and use Photoshop and
              Figma for UI/UX design. I focus on delivering responsive,
              user-friendly websites and can handle everything from content
              updates and feature enhancements to full-scale redesigns tailored
              to client needs.
            </p>
          </div>

          <Link
            to="/resume"
            className={`read-more-btn ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            <span>View My Resume</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
