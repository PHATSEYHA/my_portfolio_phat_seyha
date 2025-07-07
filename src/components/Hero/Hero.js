import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profilePic from "../../assets/profile.jpg";

// skill logos
import bootstrapLogo from "../../assets/logo_skill/Bootstrap.png";
import cLogo from "../../assets/logo_skill/C.png";
import cppLogo from "../../assets/logo_skill/C++.png";
import cssLogo from "../../assets/logo_skill/CSS.png";
import figmaLogo from "../../assets/logo_skill/Figma.png";
import gitLogo from "../../assets/logo_skill/Git-GitHub.png";
import githubLogo from "../../assets/logo_skill/github.png";
import htmlLogo from "../../assets/logo_skill/htmllogo.png";
import jsLogo from "../../assets/logo_skill/Javascript.png";
import laravelLogo from "../../assets/logo_skill/Laravel.png";
import mysqlLogo from "../../assets/logo_skill/MySQL.png";
import photoshopLogo from "../../assets/logo_skill/Photoshop.png";
import phpLogo from "../../assets/logo_skill/PHP.png";
import reactLogo from "../../assets/logo_skill/ReactJS.png";
import vueLogo from "../../assets/logo_skill/VueJs.png";

const skillLogos = [
  { src: htmlLogo, title: "HTML" },
  { src: cssLogo, title: "CSS" },
  { src: bootstrapLogo, title: "Bootstrap" },
  { src: jsLogo, title: "JavaScript" },
  { src: reactLogo, title: "ReactJS" },
  { src: vueLogo, title: "VueJS" },
  { src: phpLogo, title: "PHP" },
  { src: laravelLogo, title: "Laravel" },
  { src: mysqlLogo, title: "MySQL" },
  { src: gitLogo, title: "Git & GitHub" },
  { src: githubLogo, title: "GitHub" },
  { src: figmaLogo, title: "Figma" },
  { src: photoshopLogo, title: "Photoshop" },
  { src: cLogo, title: "C" },
  { src: cppLogo, title: "C++" },
];

function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showFloatingElements, setShowFloatingElements] = useState(false);

  const textOptions = [
    "I'm a Web Developer",
    "I'm a Back-End Developer",
    "I'm a Front-End Developer",
  ];

  useEffect(() => {
    const floatTimer = setTimeout(() => {
      setShowFloatingElements(true);
    }, 1000);
    return () => clearTimeout(floatTimer);
  }, []);

  useEffect(() => {
    const currentFullText = textOptions[currentTextIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % textOptions.length
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, textOptions, typingSpeed]);

  const renderFloatingElements = () => {
    if (!showFloatingElements) return null;

    const elements = [];
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 20 + 10;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 5;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.1;

      elements.push(
        <div
          key={i}
          className="floating-element"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: "100%",
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity: opacity,
          }}
        />
      );
    }
    return elements;
  };

  return (
    <section id="home">
      <div className="hero">
        <div className="floating-elements">{renderFloatingElements()}</div>

        <div className="hero-text">
          <h3>
            Hey, I'm <span className="highlight">Phat Seyha</span>
          </h3>
          <h1>
            <span className="typed-text">{currentText}</span>
          </h1>
          <p>
            I'm a web developer specializing in building modern web applications
            using Laravel for the backend and Vue.js for the frontend. I enjoy
            creating clean, scalable, and user-friendly solutions that solve
            real-world problems.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/PHATSEYHA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://t.me/phatseyha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/phat-seyha-790212361/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={profilePic}
            alt="Phat Seyha"
            loading="lazy"
            width="280"
            height="280"
          />
        </div>
      </div>

   <section className="logo-skill">
  <div className="slider-wrapper">
    <motion.div
      className="slider-container"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {[...skillLogos, ...skillLogos].map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.title}
          title={logo.title}
          className="skill-logo"
        />
      ))}
    </motion.div>
  </div>
</section>

    </section>
  );
}

export default Hero;
