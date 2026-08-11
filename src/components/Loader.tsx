import { motion } from 'framer-motion';

/** Animated loading screen shown on first mount, fades out after ~1.6s. */
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-accent-500/30 border-t-accent-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
        />
        <motion.span
          className="absolute inset-2 rounded-full border-2 border-accent-500/20 border-b-accent-300"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
        />
        <motion.span
          className="font-display text-2xl font-bold gradient-text"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          K
        </motion.span>
      </div>
      <motion.p
        className="mt-6 font-mono text-xs uppercase tracking-[0.4em] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Kimtech
      </motion.p>
    </motion.div>
  );
}
