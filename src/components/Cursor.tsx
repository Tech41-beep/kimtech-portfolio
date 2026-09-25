import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: a small dot that follows instantly and a larger ring that
 * trails with easing. Grows on hover over interactive elements.
 * Disabled on touch / coarse-pointer devices.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(fine);
  }, []);

  useEffect(() => {
    if (!enabled || !dotRef.current || !ringRef.current) return;

    document.body.classList.add('custom-cursor-on');

    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest('a, button, input, textarea, [data-cursor="hover"]')
      );
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', dn);
    window.addEventListener('mouseup', up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', dn);
      window.removeEventListener('mouseup', up);
      document.body.classList.remove('custom-cursor-on');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent-400 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-accent-400/70 transition-[width,height,opacity] duration-200"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          marginLeft: hovering ? -10 : 0,
          marginTop: hovering ? -10 : 0,
          opacity: down ? 0.5 : 1,
          willChange: 'transform',
        }}
      />
    </>
  );
}
