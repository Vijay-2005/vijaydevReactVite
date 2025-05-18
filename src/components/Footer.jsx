import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real app, you would handle the subscription here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-gradient-sphere-1"></div>
      <div className="footer-gradient-sphere-2"></div>
      <div className="footer-gradient-sphere-3"></div>
      
      <div className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <div className="footer-brand">
              <h3>Vijay Prajapati</h3>
              <p className="footer-tagline">Engineering creative solutions</p>
            </div>
            <div className="footer-social">
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
              <a href="https://www.instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="col-md-3 footer-column">
            <h4 className="footer-header">Navigation</h4>
            <nav className="footer-nav">
              <a href="#home" className="footer-link">
                <i className="fas fa-home footer-icon"></i> Home
              </a>
              <a href="#about" className="footer-link">
                <i className="fas fa-user footer-icon"></i> About
              </a>
              <a href="#skills" className="footer-link">
                <i className="fas fa-brain footer-icon"></i> Skills
              </a>
              <a href="#projects" className="footer-link">
                <i className="fas fa-code-branch footer-icon"></i> Projects
              </a>
              <a href="#contact" className="footer-link">
                <i className="fas fa-paper-plane footer-icon"></i> Contact
              </a>
            </nav>
          </div>
          
          <div className="col-md-2 footer-column">
            <h4 className="footer-header">Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt me-2"></i>
                <span>Bangalore</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope me-2"></i>
                <span>vkprajapati072@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone me-2"></i>
                <span>07668055685</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 footer-column">
            <h4 className="footer-header">Stay Updated</h4>
            <p className="newsletter-text">Subscribe to receive updates and news about my latest projects.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit" className="newsletter-button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-badges">
            <span className="footer-badge">
              <i className="fas fa-code"></i> with <i className="fas fa-heart pulse"></i> by Vijay
            </span>
            <span className="footer-badge">
              <i className="fab fa-react"></i> React
            </span>
          </div>
          <p className="copyright">© {currentYear} Vijay Prajapati. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;