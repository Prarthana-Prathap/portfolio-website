import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax and fade animations
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for sections
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      company: "UMass Boston",
      position: "Intern - Software Engineer",
      period: "August 2024 - Present",
      description: "Developed efficient web applications, optimized performance, and improved documentation.",
      technologies: ["React", "Python", "Javascript", "Jira"],
      detailedDescription: [
        "Designed and implemented high-performance RESTful APIs using Python and JavaScript, incorporating advanced features such as sorting, pagination, and fast response times of under 1 ms, ensuring efficient data handling and seamless user interaction.",
        "Developed comprehensive API documentation using Sphinx, making it easier for developers to integrate and use the APIs, while also focusing on improving overall application usability to boost user experience and enhancing delivery speed by 20%.",
        "Refactored legacy code to optimize performance, reduce technical debt, and improve maintainability, ensuring better scalability and simpler future updates.",
      ]
    },
    {
      company: "UMass Boston",
      position: "Research Assistant",
      period: "August 2023 - May 2024",
      description: "Worked on cloud infrastructure and developed scalable solutions.",
      technologies: ["Shell", "Python", "Linux", "Snakemake", "Docker"],
      detailedDescription: [
        "Optimized genomic data processing pipelines on high-performance Linux HPC systems by utilizing shell scripting, automating CUT&RUN, scRNA-seq, and scATAC-seq workflows, resulting in improved efficiency and reduced manual intervention.",
        "Developed a robust web application to organize and structure large server data files, enhancing accessibility, tracking, and collaborative use by research teams.",
        "Dockerized bioinformatics applications to simplify the deployment process, ensuring consistency and portability across different research teams and environments, improving overall workflow efficiency.",
        "Streamlined sequencing data processing by automating pipelines with Snakemake, reducing manual errors and accelerating analysis, achieving a 20% reduction in data processing time with a single command.",
        "Ensured quality control and reproducibility of data analysis by implementing standardized processes for genomic data handling and storage.",
      ]
    },
    {
      company: "UMass Boston",
      position: "Grader - Programming in C",
      period: "October 2022 - May 2023",
      description: "Optimized genomic data workflows, automated pipelines, and streamlined deployment processes.",
      technologies: ["C", "Python", "Automated testing"],
      detailedDescription: [
        "Conducted personalized one-on-one tutoring sessions for students, tailoring lessons to individual learning styles, and utilizing various teaching tools to boost comprehension, engagement, and academic performance.",
        "Fostered a supportive learning environment by addressing students' unique challenges, resulting in improved retention and higher grades.",
        "Enhanced grading consistency and accuracy by developing Python-based test cases with predefined rubrics, automating assessment processes and minimizing subjectivity in evaluations.",
        "Implemented code-quality checks and debugging tests, enabling faster, fairer grading while providing students with actionable feedback for improvement."
      ]
    },
    {
      company: "London Stock Exchange Group",
      position: "Senior Software Engineer",
      period: "April 2022 - August 2023",
      description: "Enhanced Azure services and implemented new features.",
      technologies: ["Angular", "Typescript", "Javascript", "Node.js", "Postman", "Swagger", "Snowflake", "Cassandra"],
      detailedDescription: [
        "Led the development of a responsive UI to showcase real-time stock market data, utilizing Angular and Node.js, while incorporating customized user preferences for improved personalization.",
        "Optimized development workflows, increasing team efficiency and reducing repetitive tasks by 30%, resulting in faster project delivery.",
        "Provided mentorship to 2 junior developers, nurturing their skills in Angular and JavaScript, and fostering their professional growth.",
        "Championing Agile/Scrum methodologies to ensure efficient delivery of scalable, high-performance applications that meet client needs and business objectives."
      ]
    },
    {
      company: "Refinitiv",
      position: "Associate Software Engineer",
      period: "July 2019 - April 2022",
      description: "Developed, tested, and deployed high-quality C# and Angular solutions with cross-functional teams.",
      technologies: ["Angular", "C#", ".NET", "Node.js", "Jira", "Git"],
      detailedDescription: [
        "Integrated RESTful API services and collaborated with cross-functional teams to develop, test, and deploy high-quality software solutions using C# and .NET with MVC architecture for a Single Page Application.",
        "Designed and implemented a fast, responsive UI leveraging Angular 10 with TypeScript, alongside NGXS and RXJS, to create dynamic and seamless user experiences.",
        "Improved application performance by implementing advanced caching mechanisms, leading to a 36% increase in user satisfaction.",
        "Collaborated with senior engineers on architecture design.",
        "Utilized the ELF library to standardize and reuse components across the application, improving efficiency and reducing development time.",
        "Managed task progress using Jira and supported multiple teams by providing shared features and resources, ensuring streamlined collaboration across functions."
      ]
    },
    {
      company: "Refinitiv (Thomson Reuters)",
      position: "Intern",
      period: "January 2019 - June 2019",
      description: "Contributing to the development, optimization, and debugging of C#-based products",
      technologies: ["C#", "ASP.NET", "Knockout.js", "HTML5", "CSS3"],
      detailedDescription: [
        "Collaborated in enhancing features for a single-page application, improving overall user experience and interface design.",
        "Implemented new functionalities and optimized existing ones to ensure seamless performance and responsiveness.",
        "Worked closely with the development team to address bugs and perform testing, ensuring a smooth user experience.",
        "Utilized modern JavaScript frameworks to add dynamic content and improve the application’s speed."
      ]
    }
  ];

  const projects = [
    {
      title: "Genomic Data Processing Pipeline",
      description: "Developed an automated pipeline for processing genomic sequencing data using Snakemake workflow management. Implemented parallel processing capabilities and containerized the application for consistent deployment.",
      image: "/genomic-pipeline.png",
      github: "https://github.com/Prarthana-Prathap/genomic-pipeline",
      technologies: ["Python", "Snakemake", "Docker", "Shell"]
    },
    {
      title: "Stock Market Analytics Dashboard",
      description: "Built a real-time stock market analytics dashboard using Angular and TypeScript. Features include live data visualization, interactive charts, and personalized watchlists with WebSocket integration.",
      image: "/stock-analytics.png",
      github: "https://github.com/Prarthana-Prathap/stock-analytics",
      technologies: ["Angular", "TypeScript", "WebSocket", "D3.js"]
    },
    {
      title: "API Documentation Portal",
      description: "Created a comprehensive API documentation portal using React and Sphinx. Implemented interactive API testing, code examples, and automated documentation generation from code comments.",
      image: "/api-docs.png",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
    {
      title: "Simply Organize",
      description: "A web application to organize uploaded files, into a predefined folder structure on the server, improving pipeline execution efficiency by 30%. Built on HTML, JavaScript, Node.js, SQLite for the database and OAuth2 for authentication.",
      image: "/api-docs.png",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
    {
      title: "RTInvest",
      description: "A web application for real-time property investment analysis, improving decision-making accuracy for users by 20%. Realtime properties in the area with potential Rate of Investment are displayed on the map with colored markers for the user to make decision using Django, Python and MySQL database.",
      image: "/api-docs.png",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
    {
      title: "Client 360",
      description: "A part of Refinitiv's Wealth Management strategy which is efficient in managing clients' assets and providing exceptional advice. The major focus is on maximizing relationship aspects of their client interaction.",
      image: "/api-docs.png",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
    {
      title: "Thomson ONE Anywhere",
      description: "A mobile solution which allows financial advisors and wealth managers to stay connected to critical market information and execute client trades while on the move built using MVC architecture. It allows users to access vital markets and execute client trades on iPad, iPhone and Android tablets.",
      image: "/api-docs.png",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
    {
      title: "Proposal 360",
      description: "A solution targeted for Refinitiv Workspace Wealth Advisors which helps in building proposals for clients and prospects. The project targets integrating various endpoints to provide the data points needed for the UI.",
      image: "/api-docs.png",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
    {
      title: "Gene Community",
      description: "Gene Community, a web application which helps researchers and biologists to identify the activators and repressors of a gene. It contains data related to API Complexan parasites like Toxoplasma gondii.",
      image: "public/APIComplex.jpg",
      github: "https://github.com/Prarthana-Prathap/api-docs-portal",
      technologies: ["React", "Python", "Sphinx", "REST APIs"]
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            {['intro', 'experience', 'projects', 'skills', 'education'].map((section) => (
              <motion.li
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="nav-link"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.section 
          id="intro" 
          className="section intro-section"
        >
          <div className="greeting">
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: [0.5, 10.5, 1]
              }}
              transition={{ 
                duration: 2.8,
                scale: {
                  times: [0, 5.5, 10],
                  type: "spring",
                  damping: 8,
                  stiffness: 100
                }
              }}
            >
              Hey there! 👋
            </motion.h2>
          </div>

          <motion.div 
            className="profile-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="profile-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={process.env.PUBLIC_URL + '/profile-picture.jpeg'} 
                alt="Prarthana Prathap" 
                className="profile-image"
              />
            </motion.div>
            <motion.h1 
              className="name"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Prarthana Prathap
            </motion.h1>
            <motion.p 
              className="tagline"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer & Tech Enthusiast
            </motion.p>
            <motion.div 
              className="social-links"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.a 
                href="https://github.com/Prarthana-Prathap" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/prarthanaprathap/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="experience" 
          className="section"
          {...fadeInUp}
        >
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Experience
          </motion.h2>
          <motion.div 
            className="experience-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                className="experience-card"
                variants={fadeInUp}
                custom={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedExp(exp)}
              >
                <h3>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {selectedExp && (
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
            >
              <motion.div 
                className="modal-content"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedExp(null)}
                >
                  ×
                </button>
                <h2>{selectedExp.company}</h2>
                <h3>{selectedExp.position}</h3>
                <p className="modal-period">{selectedExp.period}</p>
                <div className="modal-technologies">
                  {selectedExp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="modal-description">
                  <ul>
                    {selectedExp.detailedDescription.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.section>

        <motion.section 
          id="projects" 
          className="section projects-section"
          {...fadeInUp}
        >
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Projects</motion.h2>
          <motion.div 
            className="projects-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.div 
              className="project-navigation prev"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
            >
              <i className="fas fa-chevron-left"></i>
            </motion.div>

            <motion.div 
              key={currentProject}
              className="project-item"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-content">
                <div className="project-image-container">
                  <img 
                    src={process.env.PUBLIC_URL + projects[currentProject].image} 
                    alt={projects[currentProject].title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <motion.a 
                      href={projects[currentProject].github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                  </div>
                </div>
                <div className="project-details">
                  <h3>{projects[currentProject].title}</h3>
                  <p>{projects[currentProject].description}</p>
                  <div className="tech-stack">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="project-navigation next"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
            >
              <i className="fas fa-chevron-right"></i>
            </motion.div>

            <div className="project-dots">
              {projects.map((_, index) => (
                <motion.div
                  key={index}
                  className={`project-dot ${index === currentProject ? 'active' : ''}`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="section"
          {...fadeInUp}
        >
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="section-title"
          >
            Skills
          </motion.h2>
          <motion.div 
            className="skills-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            {[
              {
                category: 'Frontend',
                skills: [
                  { 
                    name: "React", 
                    level: 90,
                    icon: "devicon-react-original colored"
                  },
                  { 
                    name: "JavaScript", 
                    level: 85,
                    icon: "devicon-javascript-plain colored"
                  },
                  { 
                    name: "TypeScript", 
                    level: 85,
                    icon: "devicon-typescript-plain colored"
                  },
                  { 
                    name: "Angular", 
                    level: 85,
                    icon: "devicon-angularjs-plain colored"
                  },
                  { 
                    name: "HTML5", 
                    level: 95,
                    icon: "devicon-html5-plain colored"
                  },
                  { 
                    name: "CSS3", 
                    level: 90,
                    icon: "devicon-css3-plain colored"
                  }
                ]
              },
              {
                category: 'Backend',
                skills: [
                  { 
                    name: "Python", 
                    level: 85,
                    icon: "devicon-python-plain colored"
                  },
                  { 
                    name: "Node.js", 
                    level: 80,
                    icon: "devicon-nodejs-plain colored"
                  },
                  { 
                    name: "C#", 
                    level: 80,
                    icon: "devicon-csharp-plain colored"
                  },
                  { 
                    name: "Java", 
                    level: 75,
                    icon: "devicon-java-plain colored"
                  }
                ]
              },
              {
                category: 'Database & Tools',
                skills: [
                  { 
                    name: "MongoDB", 
                    level: 80,
                    icon: "devicon-mongodb-plain colored"
                  },
                  { 
                    name: "MySQL", 
                    level: 85,
                    icon: "devicon-mysql-plain colored"
                  },
                  { 
                    name: "PostgreSQL", 
                    level: 85,
                    icon: "devicon-postgresql-plain colored"
                  },
                  { 
                    name: "SQLite", 
                    level: 80,
                    icon: "devicon-sqlite-plain colored"
                  },
                  { 
                    name: "Git", 
                    level: 90,
                    icon: "devicon-git-plain colored"
                  }
                ]
              },
              {
                category: 'DevOps & Cloud',
                skills: [
                  { 
                    name: "Docker", 
                    level: 75,
                    icon: "devicon-docker-plain colored"
                  },
                  { 
                    name: "AWS", 
                    level: 80,
                    icon: "devicon-amazonwebservices-original colored"
                  },
                  { 
                    name: "Terraform", 
                    level: 75,
                    icon: "devicon-terraform-plain colored"
                  }
                ]
              },
              {
                category: 'Testing & Debugging',
                skills: [
                  { 
                    name: "Jasmine", 
                    level: 85,
                    icon: "devicon-jasmine-plain colored"
                  },
                  { 
                    name: "Karma", 
                    level: 80,
                    icon: "devicon-karma-plain colored"
                  },
                  { 
                    name: "JUnit", 
                    level: 85,
                    icon: "devicon-junit-plain colored"
                  }
                ]
              }
            ].map((category, categoryIndex) => (
              <motion.div 
                key={category.category}
                className="skill-category"
                variants={fadeInUp}
                custom={categoryIndex}
                whileHover={{ scale: 1.02 }}
              >
                <h3>{category.category}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: skillIndex * 0.1
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-info">
                        <div className="skill-header">
                          <i className={skill.icon}></i>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <motion.div 
                          className="skill-bar"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2,
                            delay: skillIndex * 0.2,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          id="education" 
          className="section"
          {...fadeInUp}
        >
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Education</motion.h2>
          <motion.div 
            className="education-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          >
            <motion.div 
              className="education-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3>Master of Science in Computer Science</h3>
              <p className="institution">University of Massachusetts, Boston</p>
              <p className="duration">2022 - 2024</p>
              <p className="gpa">GPA: 3.97</p>
              <p className="degree-description">
                Advanced coursework in Software Engineering, Cloud Computing, and Web Development. 
                Focused on building scalable applications, distributed systems, and modern web technologies. 
                Key areas include full-stack development, database management, and cloud architecture.
              </p>
              <br/>
              <h3>Bachelor of Engineering in Computer Science and Engineering</h3>
              <p className="institution">University Visvesvaraya College of Engineering</p>
              <p className="duration">2015 - 2019</p>
              <p className="gpa">Aggregate: 81.85%</p>
              <p className="degree-description">
                Comprehensive foundation in Computer Science fundamentals including Data Structures, 
                Algorithms, Operating Systems, and Computer Networks. Developed strong problem-solving 
                skills through practical projects and theoretical coursework.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </Router>
  );
}

export default App;
