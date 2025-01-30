import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm Prarthana Prathap</h1>
        <p className="subtitle">Full Stack Developer</p>
        <p className="description">
          I build exceptional digital experiences that combine elegant design with powerful functionality.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Get In Touch</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
