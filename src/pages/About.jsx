import React from 'react'
import '../styles/About.css'

const About = () => {
  const skills = [
    'Python - FastAPI',
    'React + Vite',
    'HTML',
    'CSS',
    'MySQL'
  ]

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "PSG College of Arts & Science, Coimbatore",
      year: "2024-2026",
      description: "Bharathiar University"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Loyola College Autonomous, Chennai",
      year: "2021-2024",
      description: "Madras University"
    }
  ]

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <p>Behind the Code: Meet the Creator</p>
        </div>

        <div className="about-content">
          <div className="about-text">
<p>
  I’m a web development enthusiast with a strong interest in building functional and user-friendly web applications. While I’m still growing my experience, I enjoy working across both frontend and backend technologies and constantly seek opportunities to learn and improve.
</p>
<p>
  Outside of development, I like exploring new tools, experimenting with personal projects, and staying up to date with the latest in tech. I believe in learning by doing and continuously building practical skills through real-world application.
</p>
          </div>

          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="skill-item"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="year">{edu.year}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About