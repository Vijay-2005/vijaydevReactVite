import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (    <header className={`navbar ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="#home" className="navbar-brand" style={{ marginRight: 'auto', display: 'flex', alignItems: 'center' }}>
            <img src="/img/logo.svg" alt="Vijay's Logo" style={{ height: '32px', marginRight: '10px' }} />
            <span>vijay.dev</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', gap: '1rem' }} className="d-none d-md-flex">
            <a href="#home" className="nav-link">Home</a>
            
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          {/* Mobile menu button - fixed right position */}
          <div className="d-md-none" style={{ 
            display: 'flex', 
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            <button 
              className="btn btn-outline py-1"
              onClick={toggleMenu}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0.5rem', 
                background: 'transparent', 
                border: 'none',
              }}
              aria-label="Toggle menu"
            >
              <span style={{ fontSize: '1.5rem', color: 'var(--light-text)' }}>
                {menuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%',
            padding: '1rem 0',
            gap: '0.5rem',
            animation: 'fadeIn 0.3s ease'
          }} className="d-md-none">
            <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 