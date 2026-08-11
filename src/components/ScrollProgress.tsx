import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient progress bar fixed to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9998] h-[3px] w-full origin-left bg-gradient-to-r from-accent-300 via-accent-500 to-accent-700"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
