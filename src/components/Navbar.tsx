import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { NAV_ITEMS, PROFILE, type NavId } from '@/data';
import { useActiveSection } from '@/hooks';

export default function Navbar({
  theme,
  onThemeToggle,
}: {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const scrollTo = (id: NavId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      >
        <nav className="glass-strong relative flex h-[58px] items-center justify-between rounded-2xl px-4 shadow-glass sm:px-5">
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2.5 text-left"
            aria-label="Go to home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-accent-500/15 font-display text-sm font-bold text-accent-300 ring-1 ring-accent-500/40 transition-shadow group-hover:shadow-glow">
              K<span className="absolute inset-0 rounded-lg bg-accent-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-fg sm:block">
              Kimtech<span className="text-accent-400">'s</span>
            </span>
          </button>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  active === item.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-2 -bottom-[1px] h-px bg-accent-400 shadow-[0_0_10px_2px_rgba(139,92,246,0.65)]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-fg sm:block"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
            <button
              onClick={onThemeToggle}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-fg md:hidden"
              aria-label="Open navigation"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-fg">
                Kimtech<span className="text-accent-400">'s Portfolio</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 p-3 text-muted transition-colors hover:text-fg"
                aria-label="Close navigation"
              >
                <FiX size={20} />
              </button>
            </div>
            <motion.div
              className="mt-20 flex flex-col gap-2"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  custom={i}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                  className={`flex items-center gap-5 border-b border-white/5 py-5 text-left font-display text-3xl font-semibold transition-colors ${
                    active === item.id ? 'text-accent-300' : 'text-fg/70 hover:text-fg'
                  }`}
                >
                  <span className="font-mono text-xs text-accent-500">0{i + 1}</span>
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs text-muted">Let’s build something useful.</span>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-fg" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
