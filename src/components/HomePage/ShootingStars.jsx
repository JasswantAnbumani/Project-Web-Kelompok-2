import { useRef, useEffect } from 'react';

const ShootingStars = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const MAX_STARS = 12;
  const TAIL_LENGTH = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scale = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * scale;
      canvas.height = 250 * scale;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(scale, scale);
    };

    resize();
    window.addEventListener('resize', resize);

    const createShootingStar = () => {
      const speed = Math.random() * 4 + 5;
      const angle = Math.PI / 4;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      return {
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * 40 + 10,
        vx,
        vy,
        trail: [],
        life: 0,
        maxLife: Math.floor(Math.random() * 50 + 70),
      };
    };

    const drawStar = (ctx, star) => {
      const fade = 1 - star.life / star.maxLife;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.vx * 10, star.y - star.vy * 10);
      ctx.strokeStyle = `rgba(0, 255, 255, ${fade})`; 
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = `rgba(0, 255, 255, ${fade})`; 
      ctx.lineCap = 'round';
      ctx.stroke();
    };

    const drawTrail = (ctx, trail, lifeProgress) => {
      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        const trailFade = (i + 1) / trail.length;
        const totalFade = trailFade * (1 - lifeProgress);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 255, 255, ${totalFade})`; 
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (starsRef.current.length < MAX_STARS && Math.random() < 0.25) {
        starsRef.current.push(createShootingStar());
      }

      starsRef.current.forEach((star, index) => {
        star.trail.push({ x: star.x, y: star.y });
        if (star.trail.length > TAIL_LENGTH) star.trail.shift();

        const lifeProgress = star.life / star.maxLife;
        drawTrail(ctx, star.trail, lifeProgress);
        drawStar(ctx, star);

        star.x += star.vx;
        star.y += star.vy;
        star.life++;

        if (star.life > star.maxLife) {
          starsRef.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '250px',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'transparent',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default ShootingStars;
