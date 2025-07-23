import React from "react";
import Certificate from "./Certificate";
import "./Projects.css";

function Projects() {
  const projects = [
    
    {
      title: "VechchSal",
      description:
        "Developed a comprehensive healthcare platform with appointment scheduling, medical article sharing, and secure doctor-patient communication",
      image: "/assets/projects/VCS.png",
      link: "https://vcsuser.westernuniversity.digital/",
      tags: ["Vue.JS", "Bootstrap", "Laravel", "MySQL"],
    },
    {
      title: "Green Folio",
      description:
        "Developed an interactive web application using JavaScript to raise awareness about environmental issues.",
      image: "/assets/projects/project2.png",
      link: "http://antstudents.com/WenScholarshipBatch1/js/g5/index.html",
      tags: ["Javascript", "Bootstrap", "API"],
    },
    {
      title: "Cambodia Donation Center",
      description:
        "Build a Donation Platform with Bootstrap’s built-in, responsive design features.",
      image: "/assets/projects/project1.png",
      link: "https://phatseyha.github.io/Donation_Bootstrap",
      tags: ["Bootstrap", "CSS Modules", "Responsive"],
    },
    {
      title: "Cambodia Donation Center",
      description:
        "Build a Donation Platform ",
      image: "/assets/projects/CDC.png",
      link: "https://phatseyha.github.io/Donation_Bootstrap",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Movie Landing Page",
      description: "Build a Movive Landing Page",
      image: "/assets/projects/project3.png",
      link: "https://phatseyha.github.io/Movie_Landing_page",
      tags: ["HTML", "CSS"],
    },
  ];

  const certificates = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "April 23, 2025",
      link: "https://drive.google.com/file/d/1ShB0XhtlPij9_JOceSU5WO52JcPbGyFq/view?usp=sharing",
      image: "/assets/certificates/aws.jpg",
      skills: ["Cloud Computing", "AWS Services", "Security Fundamentals"],
    },
    {
      title: "Associate in Cybersecurity",
      issuer: "Fortinet",
      date: "June 10, 2025",
      link: "https://drive.google.com/file/d/1PUteaVSzxis3uxk6_6xrktdkLI1ikEZZ/view?usp=sharing",
      image: "/assets/certificates/fortinet.jpg",
      skills: ["Network Security", "Firewalls", "Threat Protection"],
    },
    {
      title: "Fundamentals in Cybersecurity",
      issuer: "Fortinet",
      date: "June 10, 2025",
      link: "https://drive.google.com/file/d/17vmeXLyogLUc3JYIw_hWQXMzN5i3h6Yq/view?usp=sharing",
      image: "/assets/certificates/fortinet2.png",
      skills: ["Network Security", "Firewalls", "Threat Protection"],
    },
  ];

  return (
    <section className="projects" id="projects">
      {/* Projects Section */}
      <div className="section-header">
        <h2 className="section-title">
          <span className="highlight">Web Projects</span>
        </h2>
        <p className="section-subtitle">Here are some of my recent works</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-link"
            >
              <div className="image-container">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="overlay">
                  <span className="view-text">View Project</span>
                </div>
              </div>
            </a>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="section-header" style={{ marginTop: "4rem" }}>
        <h2 className="section-title">
          <span className="highlight">My Certificates</span>
        </h2>
        <p className="section-subtitle">Industry-recognized certifications</p>
      </div>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <Certificate
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
            image={process.env.PUBLIC_URL + cert.image}
            skills={cert.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
