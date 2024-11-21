import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,  
        y: event.clientY   
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

return (
    <div
        style={{
            position: 'absolute',
            left: mousePosition.x,
            top: mousePosition.y,
            width: '40px',
            height: '40px',
            backgroundColor: 'purple',
            borderRadius: '50%',
            pointerEvents: 'none',
            boxShadow: '0 0 50px 30px rgba(128, 0, 128, 0.6)',
            opacity: 0.4,
        }}
    ></div>
);
};

export default MouseFollower;
