import React, { useState } from 'react';

const projects = [
  {
    title: 'Wedding Card Shops',
    description: 'An elegant e-commerce platform for wedding card designs with customization options.',
    link: 'https://wedding-cards-five.vercel.app/',
    icon: 'fas fa-store',
    tags: ['React', 'NextJS', 'MongoDB']
  },
  {
    title: 'AI Powered Grocery App',
    description: 'Smart grocery shopping platform that uses AI to recommend products based on preferences and shopping history.',
    link: 'https://www.fresh-cart.live/',
    icon: 'fas fa-shopping-basket',
    tags: ['React', 'TensorFlow', 'Node.js']
  },
  {
    title: 'Sonic Wave',
    description: 'Music streaming platform with dynamic audio visualization and personalized playlists.',
    link: 'https://sonic-waaaavee.vercel.app/',
    icon: 'fas fa-music',
    tags: ['React', 'Web Audio API', 'Firebase']
  },
  {
    title: 'Todo App',
    description: 'Feature-rich task management application with categories, reminders, and progress tracking.',
    link: 'https://vercel.com/vijay-2005s-projects/todo-app-react',
    icon: 'fas fa-tasks',
    tags: ['React', 'Redux', 'LocalStorage']
  },
  {
    title: 'Community Nexus',
    description: 'Social networking app for communities built with Kotlin, featuring real-time messaging and event planning.',
    link: 'https://github.com/Vijay-2005/Comnex',
    icon: 'fas fa-users',
    tags: ['Kotlin', 'Firebase', 'Android SDK']
  },
  {
    title: 'Mobile Wallet',
    description: 'Secure banking application for the Mifos Initiative with transaction tracking and financial management.',
    link: 'https://github.com/Vijay-2005/mobile-wallet',
    icon: 'fas fa-wallet',
    tags: ['Java', 'Spring Boot', 'REST API']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="mb-3">My <span className="gradient-text">Projects</span></h2>
          <p className="text-muted mb-5">Explore some of my recent work</p>
        </div>
        
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-4 mb-5" key={index} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <div className="skill-card" style={{ margin: '0 15px' }}>
                <div className="skill-icon">
                  <i className={project.icon}></i>
                </div>
                <h3 className="skill-title">{project.title}</h3>
                <p className="skill-description">
                  {project.description}
                </p>
                <div className="skill-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">{tag}</span>
                  ))}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="skill-tag project-link-tag">
                    <i className="fas fa-external-link-alt me-1"></i> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="https://github.com/Vijay-2005" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <i className="fab fa-github me-2"></i>
            View More on GitHub
          </a>
        </div>
      </div>
      
      {/* Background gradient spheres */}
      <div className="project-background">
        <div className="gradient-sphere" style={{ 
          background: 'var(--primary)', 
          width: '400px', 
          height: '400px', 
          top: '60%', 
          left: '10%', 
          opacity: '0.05' 
        }}></div>
        <div className="gradient-sphere" style={{ 
          background: 'var(--secondary)', 
          width: '500px', 
          height: '500px', 
          bottom: '20%', 
          right: '5%', 
          opacity: '0.07' 
        }}></div>
      </div>
    </section>
  );
};

export default Projects; 