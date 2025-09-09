


import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';
function App() {
  const projects = [
    {
      title: "AutoExplorer (Car Webiste)",
      description: "I built a car-related web application using Vite and ReactJS for the frontend, with Express.js, Node.js, and MongoDB as the backend. The app allows users to browse and search for cars using various filters, view detailed car information, compare different models, and manage their favorite cars. Users can also filter search results based on criteria like fuel type (including electric and hybrid cars), price range, and other specifications. The backend handles user authentication, car listings, and data management, ensuring smooth communication with the frontend. The project uses React Router for navigation, lazy loading with Suspense for better performance, and a well-structured routing system for an efficient and user-friendly experience",
      source: "https://github.com/1css/AutoExplorer",
      deploy: "https://auto-explorer.vercel.app/",
    },
    {
      title: "Puja Website",
      description: "This is a static website for puja services where users can book a puja, buy idols, subscribe to pujas, and also book a session with an astrologer. The website displays information for devotees.",
      source: "https://github.com/yourusername/task-manager",
      deploy:"https://frontend-puja-website.vercel.app/"
    },
    {
      title: "Weather Dashboard",
      description: "React-based weather dashboard displaying current weather and temperature trends for selected locations. It fetches data from the OpenWeather API, includes a city search feature, and shows daily weather summaries with average, max, min temperatures, and dominant weather conditions.",
      source: "https://github.com/1css/frontend-puja-website",
      deploy:"https://github.com/1css/Weather"
    },
    {
      title:"Timber",
      description:"Developed a static website using React, implementing React Router to enable smooth navigation between key pages such as Home, Products, About, and Contact Us. Built reusable UI components like Header, Footer, and Product listings to ensure consistency across pages. Focused on clean structure and efficient routing to deliver a fast, user-friendly experience without dynamic content loading",
      soource:"https://github.com/1css/Timber-website",
      deploy:"https://timber-website.vercel.app/",
    }
  ];

  const skills = ["MongoDB", "Express", "React", "Node.js", "Bootstrap", "Python", "SQL"];

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
 return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-content"
        >
          <h1>
            Hi, I'm <span className="highlight">Harshith C S</span>
          </h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            MERN Stack Developer | IT Support Specialist
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
          >
            More About Me
          </motion.button>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            About Me
          </motion.h2>
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <p>
              I'm a passionate MERN stack developer with 1 year of experience building
              modern web applications. I've also worked for 6 months in IT support, where
              I developed troubleshooting, system maintenance, and user support skills.
            </p>
            <p>
              I love turning ideas into clean, scalable, and user-friendly applications
              using React, Node.js, and MongoDB. My goal is to keep learning and deliver
              high-quality software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-alt">
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Skills
          </motion.h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="projects-grid">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotate: -1 }}
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="links">
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="source-link"
        >
          View Source <FaGithub style={{ marginLeft: "8px" }} />
        </a>

        {/* ✅ Show Deploy link only if it exists */}
        {project.deploy && (
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="deploy-link"
            style={{ marginLeft: "15px" }}
          >
            Live Demo 🚀
          </a>
        )}
      </div>
    </motion.div>
  ))}
</div>


      {/* Contact Section */}
      <section className="section bg-alt">
        <div className="container text-center">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="contact-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Have a project in mind? Let's work together!
          </motion.p>
          <motion.a
            href="mailto:agharshi10@gmail.com"
            className="btn-secondary"
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope style={{ marginRight: "8px" }} /> agharshi10@gmail.com
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Harshith | MERN Stack Developer</p>
          <div className="social-links">
            <a
              href="https://github.com/1css?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/harshith-c-s-1bbbb1244"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;   