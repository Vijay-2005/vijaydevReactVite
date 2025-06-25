import React, { useState } from 'react';

const projects = [
 
  {
    title: 'AI Powered Grocery App',
    description: 'Revolutionary grocery shopping platform that allows adding multiple items with a single prompt, powered by advanced AI.',
    link: 'https://www.fresh-cart.live/',
    icon: 'fas fa-shopping-basket',
    tags: ['React', 'AI/ML', 'MySql']
  },
  {
    title: 'Sonic Wave',
    description: 'E-commerce platform specializing in music accessories, offering a wide range of instruments and audio devices.',
    link: 'https://sonic-waaaavee.vercel.app/',
    icon: 'fas fa-guitar',
    tags: ['React',  'Tailwind CSS']
  },
  {
    title: 'Silicon Synapse',
    description: 'Platform providing access to state-of-the-art AI agents, enabling advanced AI interactions and automation.',
    link: 'https://www.siliconsynapse.in/',
    icon: 'fas fa-brain',
    tags: ['React', 'AI/ML', 'Langgraph']
  },
  {
    title: 'Community Nexus',
    description: 'Innovative platform connecting underprivileged communities with government schemes and benefits, bridging the accessibility gap.',
    link: 'https://github.com/Vijay-2005/Comnex',
    icon: 'fas fa-hands-helping',
    tags: ['React', 'Spring Boot', 'MongoDB']
  },
  {
    title: 'Mobile Wallet',
    description: 'Secure banking application for the Mifos Initiative with transaction tracking and financial management.',
    link: 'https://github.com/Vijay-2005/mobile-wallet',
    icon: 'fas fa-wallet',
    tags: ['Java', 'Spring Boot', 'REST API']
  },
   {
    title: 'Wedding Card Shops',
    description: 'An elegant e-commerce platform for wedding card designs with customization options.',
    link: 'https://wedding-cards-five.vercel.app/',
    icon: 'fas fa-store',
    tags: ['React', 'NextJS', 'Tailwind CSS']
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