import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Contact, { Footer } from '@/components/Contact';
import Cursor from '@/components/Cursor';
import Home from '@/components/Home';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import ScrollProgress from '@/components/ScrollProgress';
import StarField from '@/components/StarField';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const done = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(done);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <StarField />
      <Cursor />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar theme={theme} onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
        <main>
          <Home />
          <About />
          <Achievements />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
