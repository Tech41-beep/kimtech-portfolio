import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiDownload, FiFacebook, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { PROFILE, TYPING_WORDS } from '@/data';
import Reveal from '@/components/Reveal';
import TypingText from '@/components/TypingText';

const SOCIALS = [
  { label: 'GitHub', href: PROFILE.socials.github, icon: FiGithub },
  { label: 'LinkedIn', href: PROFILE.socials.linkedin, icon: FiLinkedin },
  { label: 'Facebook', href: PROFILE.socials.facebook, icon: FiFacebook },
  { label: 'Telegram', href: PROFILE.socials.telegram, icon: FaTelegramPlane },
  { label: 'Email', href: PROFILE.socials.email, icon: FiMail },
];

export default function Home() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <Reveal delay={0.05}>
            <p className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
              Welcome to my universe
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="heading-xl max-w-2xl text-fg">
              Hello, <br />
              I’m <span className="gradient-text">Lov Kimtech</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg text-muted sm:text-xl">
              <span>{PROFILE.role}</span>
              <span className="h-1 w-1 rounded-full bg-accent-400" />
              <span className="text-fg">{PROFILE.subRole}</span>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
              {PROFILE.intro}
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/CV/Black%20and%20White%20Simple%20CV%20Resume.pdf" download={PROFILE.cvName} className="btn-primary">
                <FiDownload size={16} />
                Download CV
              </a>
              <a href="#projects" className="btn-ghost">
                View Projects
                <FiArrowRight size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.44}>
            <div className="mt-11 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Find me on</span>
              <span className="h-px w-8 bg-white/15" />
              <div className="flex gap-1">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                    aria-label={label}
                    className="rounded-lg p-2 text-muted transition-all duration-200 hover:-translate-y-1 hover:bg-accent-500/10 hover:text-accent-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.24} y={36} className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -inset-6 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="relative aspect-square">
            <motion.div
              className="absolute inset-4 rounded-full border border-accent-400/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              <span className="absolute -left-1.5 top-1/2 h-3 w-3 rounded-full bg-accent-300 shadow-glow" />
            </motion.div>
            <motion.div
              className="absolute inset-10 rounded-full border border-dashed border-accent-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-16 overflow-hidden rounded-full border-2 border-accent-400/60 bg-accent-950 shadow-glow-lg sm:inset-20"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={PROFILE.portrait} alt="Portrait of Lov Kimtech" className="h-full w-full object-cover object-top grayscale-[15%]" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-950/60 via-transparent to-transparent" />
            </motion.div>
            <motion.div className="glass absolute -right-1 top-12 rounded-2xl px-4 py-3 shadow-glass sm:-right-5" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Currently</p>
              <p className="mt-1 text-xs font-semibold text-fg">Building the future</p>
            </motion.div>
            <motion.div className="glass absolute -bottom-2 left-0 rounded-2xl px-4 py-3 shadow-glass sm:-left-5" animate={{ y: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">I’m a</p>
              <TypingText words={TYPING_WORDS} className="mt-1 block text-xs font-semibold" typingSpeed={55} pause={1200} />
            </motion.div>
            <span className="absolute right-8 top-0 h-2 w-2 animate-pulse rounded-full bg-accent-300 shadow-glow sm:right-14" />
            <span className="absolute bottom-16 right-0 h-1.5 w-1.5 rounded-full bg-white/60 sm:right-3" />
          </div>
        </Reveal>
      </div>

      <motion.a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent-300 sm:flex" animate={{ y: [0, 7, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} aria-label="Scroll to about">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll to explore</span>
        <FiArrowDown size={15} />
      </motion.a>
    </section>
  );
}
