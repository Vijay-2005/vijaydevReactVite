import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import CursorFollower from './components/CursorFollower'
import './App.css'

function App() {
  // Add padding to the body to account for the fixed header
  useEffect(() => {
    document.body.style.paddingTop = '76px';
    
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="row">
              {/* Left side with tagline and buttons */}
              <div className="col-12 col-lg-6">
                <div className="hero-content">
                  <h1 className="mb-3">
                    <span className="gradient-text">Vijay Prajapati</span>
                  </h1>
                  <p className="mb-4 text-muted">Web Developer & AI Integration Engineer</p>
                  
                  <div className="tagline mb-4">
                    <h2 className="highlight-text">Tell me the problem,</h2>
                    <h2 className="mb-3 typewriter">I'll engineer the solution.</h2>
                  </div>
                  
                  <div className="cta-buttons">
                    <a href="#contact" className="btn btn-primary me-3">Get In Touch</a>
                    <a href="#projects" className="btn btn-outline">View Projects</a>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="social-icons">
                    <a href="https://github.com/Vijay-2005" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vijayk360/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://x.com/vijayk_360" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:vkprajapati072@gmail.com" className="social-icon" aria-label="Email">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right side with profile image */}
              <div className="col-12 col-lg-6">
                <div className="profile-image-container">
                  <div className="profile-backdrop"></div>
                  <div className="profile-image-wrapper">
                    <img 
                      src="/img/perfil-icon.jpg" 
                      alt="Vijay Prajapati" 
                      className="profile-image animated-profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background gradient spheres */}
          <div className="hero-background">
            <div className="gradient-sphere" style={{ 
              background: 'var(--primary)', 
              width: '300px', 
              height: '300px', 
              top: '20%', 
              left: '10%', 
              opacity: '0.3' 
            }}></div>
            <div className="gradient-sphere" style={{ 
              background: 'var(--secondary)', 
              width: '400px', 
              height: '400px', 
              bottom: '10%', 
              right: '5%', 
              opacity: '0.2' 
            }}></div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="skills-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="mb-3">My <span className="gradient-text">Skills</span></h2>
              <p className="text-muted mb-5">Expertise that drives innovative solutions</p>
            </div>
            
            <div className="row">
              {/* Row 1 */}
              <div className="col-4 mb-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="skill-card" style={{ margin: '0 15px' }}>
                  <div className="skill-icon">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <h3 className="skill-title">UI/UX Design</h3>
                  <p className="skill-description">
                    Creating intuitive, visually appealing interfaces with a focus on user experience and interaction design.
                  </p>
                  <div className="skill-tags">
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">Adobe XD</span>
                    <span className="skill-tag">Wireframing</span>
                    <span className="skill-tag">Prototyping</span>
                  </div>
                </div>
              </div>
              
              <div className="col-4 mb-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="skill-card" style={{ margin: '0 15px' }}>
                  <div className="skill-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="skill-title">Web Development</h3>
                  <p className="skill-description">
                    Creating modern, responsive websites and web applications with cutting-edge technologies.
                  </p>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">MongoDB</span>
                  </div>
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="col-4 mb-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="skill-card" style={{ margin: '0 15px' }}>
                  <div className="skill-icon">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h3 className="skill-title">AI Chatbots</h3>
                  <p className="skill-description">
                    Developing intelligent conversational interfaces that enhance user engagement and automate interactions.
                  </p>
                  <div className="skill-tags">
                    <span className="skill-tag">LangChain</span>
                    <span className="skill-tag">OpenAI</span>
                    <span className="skill-tag">Rasa</span>
                    <span className="skill-tag">NLP</span>
                  </div>
                </div>
              </div>
              
              <div className="col-4 mb-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="skill-card" style={{ margin: '0 15px' }}>
                  <div className="skill-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="skill-title">AI Agents & A2A</h3>
                  <p className="skill-description">
                    Building autonomous, intelligent agents with advanced communication protocols for next-generation systems.
                  </p>
                  <div className="skill-tags">
                    <span className="skill-tag">Autonomous</span>
                    <span className="skill-tag">Interoperability</span>
                    <span className="skill-tag">Generative AI</span>
                    <span className="skill-tag">API Design</span>
                  </div>
                </div>
              </div>
              
              {/* Row 3 */}
              <div className="col-4 mb-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="skill-card" style={{ margin: '0 15px' }}>
                  <div className="skill-icon">
                    <i className="fas fa-server"></i>
                  </div>
                  <h3 className="skill-title">Backend Development</h3>
                  <p className="skill-description">
                    Creating robust, scalable server-side solutions with focus on performance and reliability.
                  </p>
                  <div className="skill-tags">
                    <span className="skill-tag">Spring Boot</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">Microservices</span>
                    <span className="skill-tag">REST APIs</span>
                  </div>
                </div>
              </div>
              
              <div className="col-4 mb-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="skill-card" style={{ margin: '0 15px' }}>
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <h3 className="skill-title">Database Engineering</h3>
                  <p className="skill-description">
                    Designing and implementing efficient database solutions for optimal data storage and retrieval.
                  </p>
                  <div className="skill-tags">
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">Redis</span>
                    <span className="skill-tag">Firebase</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="experience-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="mb-3">Work <span className="gradient-text">Experience</span></h2>
              <p className="text-muted mb-5">My professional journey</p>
            </div>
            
            <div className="timeline">
                           {/* Hyperbots Inc. */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Hyperbots Inc.</h3>
                    <span className="timeline-period">Current</span>
                    
                  </div>
                  <h4 className="timeline-subtitle">Applied ML Intern (Full-Time, On-Site)</h4>
                  <p className="timeline-description">
                    Developed and deployed AI agents using MCP (Model Context Protocol) architecture. Focused on creating intelligent, autonomous systems that interact effectively with users and other AI systems.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">AI Agents</span>
                    <span className="timeline-tag">MCP Development</span>
                    <span className="timeline-tag">Applied ML</span>
                  </div>
                </div>
              </div>
              {/* Alignerr */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Alignerr</h3>
                    <span className="timeline-period">2025</span>
                  </div>
                  <h4 className="timeline-subtitle">LLM Trainer and Data annotation | Remote</h4>
                  <p className="timeline-description">
                   Worked on different projects of Data Annotation and LLM response evaluation.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">ML Data</span>
                    <span className="timeline-tag">Data Annotation</span>
                    <span className="timeline-tag">Data Validation</span>
                  </div>
                </div>
              </div>
              
 
              
              {/* Outlier */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Outlier</h3>
                    <span className="timeline-period">2024</span>
                  </div>
                  <h4 className="timeline-subtitle">LLM Model Trainer | Remote</h4>
                  <p className="timeline-description">
                        Worked on different projects of LLM model response resoning and LLM response evaluation.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">LLM</span>
                    <span className="timeline-tag">Model Training</span>
                    {/* <span className="timeline-tag">Fine-tuning</span> */}
                  </div>
                </div>
              </div>
              
              {/* Samsung Research Intern */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Samsung Research</h3>
                    <span className="timeline-period">Jul 2024 - Feb 2025</span>
                  </div>
                  <h4 className="timeline-subtitle">Research Intern | Bangalore, Karnataka</h4>
                  <p className="timeline-description">
                    Designed a conditional GAN model that achieved 90% accuracy in detecting realistic noisy images. Reduced video processing latency by 15% through optimized YUV encoding/decoding techniques. Increased data throughput by streaming dataset preparation processes, handling 50GB dataset efficiently.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">GAN Models</span>
                    <span className="timeline-tag">Video Processing</span>
                    <span className="timeline-tag">Data Optimization</span>
                  </div>
                </div>
              </div>
              
              {/* MIFOS INITIATIVE */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">MIFOS Initiative</h3>
                    <span className="timeline-period">2025</span>
                  </div>
                  <h4 className="timeline-subtitle">Open Source Contributor | Remote</h4>
                  <p className="timeline-description">
                    Contributed to an open-source reference implementation for digital wallet and payment capabilities built using the Mifos platform. Written unit tests for the features.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Open Source</span>
                    <span className="timeline-tag">Fintech</span>
                    <span className="timeline-tag">Digital Payments</span>
                  </div>
                </div>
              </div>
              
              {/* Freelancer */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-title">Freelance Developer</h3>
                    <span className="timeline-period">2022 - 2025</span>
                  </div>
                  <h4 className="timeline-subtitle">Full Stack Developer</h4>
                  <p className="timeline-description">
                    Developed and deployed various web and mobile applications for clients across different industries. Specialized in creating responsive, user-centric interfaces with robust backend systems. Managed entire project lifecycles from requirement gathering to deployment and maintenance.
                  </p>
                  <div className="timeline-tags">
                    <span className="timeline-tag">Web Development</span>
                    <span className="timeline-tag">Mobile Apps</span>
                    <span className="timeline-tag">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <Projects />
        
        {/* Technologies Section */}
        <section id="technologies" className="technologies-section section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="mb-3">My <span className="gradient-text">Technologies</span></h2>
              <p className="text-muted mb-5">Tools and technologies I'm familiar with</p>
            </div>
            
            <div className="tech-categories">
              {/* Programming Languages */}
              <div className="tech-category mb-5">
                <h3 className="category-title mb-4"><i className="fas fa-code me-2"></i>Programming Languages</h3>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-java"></i>
                    </div>
                    <span className="tech-name">Java</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <span className="tech-name">JavaScript</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <span className="tech-name">SQL</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-python"></i>
                    </div>
                    <span className="tech-name">Python</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-cuttlefish"></i>
                    </div>
                    <span className="tech-name">C++</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-cuttlefish"></i>
                    </div>
                    <span className="tech-name">C</span>
                  </div>
                </div>
              </div>
              
              {/* Frameworks & Libraries */}
              <div className="tech-category mb-5">
                <h3 className="category-title mb-4"><i className="fas fa-puzzle-piece me-2"></i>Frameworks & Libraries</h3>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <span className="tech-name">Spring Boot</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-react"></i>
                    </div>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-feather"></i>
                    </div>
                    <span className="tech-name">Hibernate</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-project-diagram"></i>
                    </div>
                    <span className="tech-name">Maven</span>
                  </div>                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-network-wired"></i>
                    </div>
                    <span className="tech-name">LangGraph</span>
                  </div>
                </div>
              </div>
              
              {/* Cloud Services */}
              <div className="tech-category mb-5">
                <h3 className="category-title mb-4"><i className="fas fa-cloud me-2"></i>Cloud Services</h3>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-aws"></i>
                    </div>
                    <span className="tech-name">AWS</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-google"></i>
                    </div>
                    <span className="tech-name">Google Cloud</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-train"></i>
                    </div>
                    <span className="tech-name">Railway</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-pencil-ruler"></i>
                    </div>
                    <span className="tech-name">Render</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-expand"></i>
                    </div>
                    <span className="tech-name">Vercel</span>
                  </div>
                </div>
              </div>
              
              {/* Web & APIs */}
              <div className="tech-category mb-5">
                <h3 className="category-title mb-4"><i className="fas fa-globe me-2"></i>Web & APIs</h3>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-exchange-alt"></i>
                    </div>
                    <span className="tech-name">RESTful API</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-file-code"></i>
                    </div>
                    <span className="tech-name">JSON</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-server"></i>
                    </div>
                    <span className="tech-name">Web Services</span>
                  </div>
                </div>
              </div>
              
              {/* Tools */}
              <div className="tech-category mb-5">
                <h3 className="category-title mb-4"><i className="fas fa-tools me-2"></i>Tools</h3>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fab fa-git-alt"></i>
                    </div>
                    <span className="tech-name">Git</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <span className="tech-name">VS Code</span>
                  </div>
                </div>
              </div>
              
              {/* AI/ML */}
              <div className="tech-category mb-5">
                <h3 className="category-title mb-4"><i className="fas fa-brain me-2"></i>AI/ML</h3>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <span className="tech-name">Machine Learning</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-icon">
                      <i className="fas fa-wave-square"></i>
                    </div>
                    <span className="tech-name">Noise Synthesis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Other sections will be added later */}
      </main>
      <Footer />
      
      {/* Cursor follower animation */}
      <CursorFollower />
    </>
  )
}

export default App
