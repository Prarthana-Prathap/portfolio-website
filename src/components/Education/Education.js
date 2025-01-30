import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../utils/educationData';
import '../../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      
      <div className="education-container">
        {educationData.map((education, eduIndex) => (
          <motion.div 
            key={education.degree}
            className="education-entry"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: eduIndex * 0.2 }}
          >
            <div className="university-info">
              <h3>{education.university}</h3>
              <p className="degree">{education.degree}</p>
              <div className="education-details">
                <span>{education.duration}</span>
                <span className="separator">•</span>
                <span>GPA: {education.gpa}</span>
                <span className="separator">•</span>
                <span>{education.location}</span>
              </div>
            </div>

            <div className="achievements-section">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Achievements
              </motion.h4>
              <ul className="achievements-list">
                {education.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="courses-section">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Key Courses
              </motion.h4>
              <div className="courses-grid">
                {education.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="course-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="course-header">
                      <h5>{course.name}</h5>
                      <span className="course-code">{course.code}</span>
                    </div>
                    <p className="course-description">{course.description}</p>
                    <div className="course-skills">
                      {course.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
