import React, { useState, useEffect, useRef } from 'react';

const CursorFollower = () => {
  // Technology icons to follow the cursor (Font Awesome classes)
  const icons = [
    'fa-brands fa-react',
    'fa-brands fa-js',
    'fa-brands fa-node-js',
    'fa-brands fa-html5',
    'fa-brands fa-css3-alt',
    'fa-brands fa-npm',
    'fa-brands fa-git-alt',
    'fa-brands fa-java',
    'fa-brands fa-python',
    'fa-solid fa-database',
    'fa-brands fa-vuejs',
    'fa-brands fa-angular',
    'fa-brands fa-aws',
    'fa-brands fa-docker',
    'fa-brands fa-github'
  ];
  
  // Create state for each icon's position
  const [positions, setPositions] = useState(
    icons.map((_, index) => ({
      left: 0,
      top: 0,
      delay: index * 0.08, // Stagger the follow delay
      rotation: Math.random() * 360, // Random initial rotation
      scale: 0.5 + Math.random() * 0.5, // Random size between 0.5 and 1
      color: getRandomColor(), // Random color
      active: false, // For hover effect
    }))
  );
  
  const animationFrameRef = useRef();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastUpdateTimeRef = useRef(Date.now());
  
  // Generate a random color with bias towards the app's theme colors
  function getRandomColor() {
    const colors = [
      '#3b82f6', // Primary blue
      '#10b981', // Primary green
      '#f8fafc', // Light text
      '#60a5fa', // Light blue
      '#34d399', // Light green
    ];
    
    // 70% chance to use a theme color, 30% chance for a random color
    if (Math.random() < 0.7) {
      return colors[Math.floor(Math.random() * colors.length)];
    } else {
      return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    }
  }
  
  // Update mouse position on movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial position setup - spread icons around center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    setPositions(positions => 
      positions.map((pos, index) => {
        const angle = (index * (360 / icons.length));
        const distance = 100; // Initial distance from center
        
        return {
          ...pos,
          left: centerX + Math.cos(angle * Math.PI / 180) * distance,
          top: centerY + Math.sin(angle * Math.PI / 180) * distance,
        };
      })
    );
    
    // Start animation loop
    const animateIcons = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastUpdateTimeRef.current) / 1000; // in seconds
      lastUpdateTimeRef.current = currentTime;
      
      setPositions(prevPositions => 
        prevPositions.map((pos, index) => {
          // Calculate the target position (offset from cursor)
          const distanceFromCursor = 40 + (index * 10); // Increasing distance for each icon
          const angle = (index * (360 / icons.length)) + (currentTime / 40); // Rotating around cursor
          
          const targetX = mousePositionRef.current.x + Math.cos(angle * Math.PI / 180) * distanceFromCursor;
          const targetY = mousePositionRef.current.y + Math.sin(angle * Math.PI / 180) * distanceFromCursor;
          
          // Smooth follow with delay based on index
          const followSpeed = 3 - (pos.delay * 2); // Speed decreases with delay
          
          const newLeft = pos.left + (targetX - pos.left) * followSpeed * deltaTime;
          const newTop = pos.top + (targetY - pos.top) * followSpeed * deltaTime;
          
          // Slowly rotate the icon
          const newRotation = pos.rotation + (deltaTime * 30 * (index % 2 === 0 ? 1 : -1));
          
          // Periodically change colors
          const newColor = 
            Math.random() < 0.003 ? getRandomColor() : pos.color;
          
          // Check if icon is close to mouse (for hover effect)
          const distanceToMouse = Math.sqrt(
            Math.pow(newLeft - mousePositionRef.current.x, 2) + 
            Math.pow(newTop - mousePositionRef.current.y, 2)
          );
          
          const active = distanceToMouse < 50; // Activate when close to cursor
          
          return {
            ...pos,
            left: newLeft,
            top: newTop,
            rotation: newRotation,
            color: newColor,
            active,
          };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(animateIcons);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateIcons);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [icons.length]);
  
  return (
    <div className="cursor-followers-container">
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`cursor-follower-icon ${pos.active ? 'active' : ''}`}
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            transform: `rotate(${pos.rotation}deg) scale(${pos.active ? 1.2 : pos.scale})`,
            color: pos.color,
            opacity: pos.active ? 0.9 : 0.6,
            filter: pos.active ? 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))' : 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.3))',
            transition: pos.active ? 'transform 0.2s ease, color 0.2s ease, opacity 0.2s ease, filter 0.2s ease' : 'color 2s ease',
            fontSize: pos.active ? '1.5rem' : '1.2rem',
          }}
        >
          <i className={icons[index % icons.length]}></i>
        </div>
      ))}
    </div>
  );
};

export default CursorFollower; 