// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { projectsData } from '../../utils/projectsData';
// import '../../styles/Projects.css';

// const Projects = () => {
//   const [currentProject, setCurrentProject] = useState(0);

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev + 1) % projectsData.length);
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
//   };

//   const goToProject = (index) => {
//     setCurrentProject(index);
//   };

//   return (
//     <section id="projects" className="projects-section">
//       <motion.h2 
//         className="section-title"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         Featured Projects
//       </motion.h2>
//       <div className="projects-container">
//         <button className="nav-button prev" onClick={prevProject}>&lt;</button>
//         <motion.div 
//           className="project-card"
//           key={currentProject}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="project-image">
//             <img src={projectsData[currentProject].image} alt={projectsData[currentProject].title} />
//             <div className="project-overlay">
//               <a href={projectsData[currentProject].github} target="_blank" rel="noopener noreferrer" className="project-link">
//                 View on GitHub
//               </a>
//             </div>
//           </div>
//           <div className="project-info">
//             <h3>{projectsData[currentProject].title}</h3>
//             <p>{projectsData[currentProject].description}</p>
//             <div className="project-tech">
//               {projectsData[currentProject].technologies.map((tech, index) => (
//                 <span key={index} className="tech-tag">{tech}</span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//         <button className="nav-button next" onClick={nextProject}>&gt;</button>
//         <div className="project-dots">
//           {projectsData.map((_, index) => (
//             <button
//               key={index}
//               className={`dot ${index === currentProject ? 'active' : ''}`}
//               onClick={() => goToProject(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
