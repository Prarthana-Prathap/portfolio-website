import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Skills.css';
import { skillsData } from '../../utils/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>
      <div className="skills-container">
        {skillsData.map((category, categoryIndex) => (
          <motion.div 
            key={category.category}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.1 }}
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
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
