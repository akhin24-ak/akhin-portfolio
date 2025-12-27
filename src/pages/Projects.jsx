import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
title: "ML-Based Loan Risk Evaluation System",
description: "A full-stack loan risk assessment platform built using React and FastAPI. Users can apply for loans online, while a machine learning model predicts loan risk scores. Secure authentication is implemented using JWT and bcrypt, and admins can review applications and visualize analytics using charts.",
technologies: ["React", "FastAPI", "Python", "SQL", "Machine Learning", "JWT", "bcrypt", "Recharts"],
github: "https://github.com/akhin24-ak/loan-management-system"

    },
   {
  title: "Personal Portfolio",
  description: "A responsive single-page personal portfolio website built using React and Vite. The application showcases my profile, skills, education, and projects using a clean component-based architecture. It features dynamic page rendering using React state, a light/dark theme toggle, and a contact form for user interaction.",
  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
  ],
  github: "https://github.com/akhin24-ak/akhin-portfolio",
  liveDemo: "https://akhin24-ak.github.io/akhin-portfolio/"
},

     {
      title: "RENE Foundation – NGO Website",
      description: "A responsive and accessible website built for RENE Foundation, a non-profit organization focused on rural welfare and entrepreneurship development. Developed using HTML, CSS, JavaScript, and Bootstrap.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://renefoundation.org/"
    },
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Here are some of my recent works</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L19 6.413L11.7071 13.7071L10.2929 12.2929L17.585 5H13V3H21Z" fill="currentColor"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects