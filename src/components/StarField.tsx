import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkle: number;
  phase: number;
};

type Shooting = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  len: number;
};

/**
 * Canvas-based animated starfield with twinkling stars and occasional shooting stars.
 * Lightweight: a single rAF loop, device-pixel-ratio capped at 2, pauses when tab hidden.
 */
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let stars: Star[] = [];
    let shooting: Shooting[] = [];
    let raf = 0;
    let last = performance.now();
    let nextShoot = 2.5 + Math.random() * 3;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(Math.floor((w * h) / 7000), 220);
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.25,
        twinkle: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const spawnShoot = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const fromTop = Math.random() > 0.4;
      const x = fromTop ? Math.random() * w * 0.8 : -40;
      const y = fromTop ? -40 : Math.random() * h * 0.5;
      const speed = 7 + Math.random() * 6;
      const angle = Math.PI / 4 + (Math.random() * 0.3 - 0.15);
      shooting.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 70 + Math.random() * 30,
        len: 90 + Math.random() * 80,
      });
    };

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 16.67, 2);
      last = now;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const t = now / 1000;
      for (const s of stars) {
        const a = reduce
          ? s.baseAlpha
          : s.baseAlpha * (0.6 + 0.4 * Math.sin(t * s.twinkle + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 214, 255, ${a})`;
        ctx.fill();
      }

      if (!reduce) {
        nextShoot -= dt / 60;
        if (nextShoot <= 0 && shooting.length < 2) {
          spawnShoot();
          nextShoot = 3 + Math.random() * 5;
        }
        for (let i = shooting.length - 1; i >= 0; i--) {
          const sh = shooting[i];
          sh.life += dt;
          sh.x += sh.vx * dt;
          sh.y += sh.vy * dt;
          const lifeP = sh.life / sh.maxLife;
          const alpha = Math.max(0, 1 - lifeP);
          const tailX = sh.x - (sh.vx / Math.hypot(sh.vx, sh.vy)) * sh.len;
          const tailY = sh.y - (sh.vy / Math.hypot(sh.vx, sh.vy)) * sh.len;
          const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
          grad.addColorStop(0, `rgba(196, 181, 253, ${alpha})`);
          grad.addColorStop(0.4, `rgba(139, 92, 246, ${alpha * 0.5})`);
          grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(sh.x, sh.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
          if (sh.life >= sh.maxLife || sh.x > w + 100 || sh.y > h + 100) {
            shooting.splice(i, 1);
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else {
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
