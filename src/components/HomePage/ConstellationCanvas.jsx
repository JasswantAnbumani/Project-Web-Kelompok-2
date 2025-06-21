import React, { useRef, useEffect } from 'react';

const ConstellationCanvas = () => {
  const canvasRef = useRef(null);
  const stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }));
  let mouse = { x: -1000, y: -1000 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ffff';

      stars.forEach((s) => ctx.fillRect(s.x, s.y, 2, 2));

      ctx.strokeStyle = 'rgba(0,255,255,0.08)';
      stars.forEach((a) => {
        stars.forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          const toMouse = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dist < 100 && toMouse < 200) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleClick = (e) => {
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle-star';
        document.body.appendChild(particle);

        const size = Math.random() * 6 + 6;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 60 + 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.animate([
          {
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: 1,
          },
          {
            transform: `translate(${x}px, ${y}px) rotate(${Math.random() * 720}deg)`,
            opacity: 0,
          }
        ], {
          duration: 800,
          easing: 'ease-out',
        });

        setTimeout(() => particle.remove(), 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ConstellationCanvas;
