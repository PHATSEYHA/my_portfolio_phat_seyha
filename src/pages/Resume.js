import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <div className="top-section">
          <div className="profile-image-container">
            <img
              src="/assets/profile1.jpg"
              alt="Phat Seyha Profile"
              className="profile-image"
            />
          </div>

          <div className="divider"></div>

          <div className="name-title">
            <h1 className="name">Phat Seyha</h1>
            <h2 className="title">Web Developer</h2>
          </div>
        </div>

        <section className="summary">
          <h3>My Summary</h3>
          <p>
            I am a recent Computer Science graduate passionate about technology
            and software development. Skilled in programming, problem-solving,
            and eager to contribute through internships and projects. Motivated
            and ready to grow in a dynamic tech environment.
          </p>
        </section>

        <section className="details">
          <div className="detail-section">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>Bachelor’s Degree in Computer Science</strong>
                <br />
                Royal University Of Phnom Penh, Graduated 2025
              </li>
              <li>
                <strong>Course web development</strong>
                <br />
                ANT Training Center, Completed 2025
              </li>
              <li>
                <strong>National high school</strong>
                <br />
                O’ambel High School, Graduated 2021
              </li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Skills</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> C, C++, HTML, CSS, Bootstrap,
                JavaScript, Vue.js, React.JS
              </li>
              <li>
                <strong>Backend:</strong> PHP, Laravel, MySQL
              </li>
              <li>
                <strong>Tools & Technologies:</strong> Git, GitHub, REST APIs,
                 Responsive Web Design, Photoshop, Ux/UI, Figma
              </li>
            </ul>
          </div>

          

          <div className="detail-section">
            <h3>Contact</h3>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:thanseyha2002@gmail.com">
                  phatseyha1608@gmail.com
                </a>
              </li>
              <li>Phone: +855 70 984 770</li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/PHATSEYHA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PHATSEYHA
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/phat-seyha-790212361/"
                  target="_blank"
                  rel="linkedIn"
                >
                  PhatSeyha
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a href="http://t.me/phatseyha" target="_blank" rel="telegram">
                  @phatseyha
                </a>
              </li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Personal Info</h3>
            <ul>
              <li>Gender: Male</li>
              <li>Date of Birth: 16 August 2003</li>
              <li>Age: 21 years old</li>
              <li>Address: Phnom Penh, Cambodia</li>
            </ul>
          </div>
        </section>

        <div className="download-btn-container">
          <a
            href="/assets/Resume.pdf"
            className="resume-download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
