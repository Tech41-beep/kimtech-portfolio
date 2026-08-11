import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiDatabase, FiLayout, FiServer, FiStar, FiTool, FiUser } from 'react-icons/fi';
import { ABOUT, SKILL_GROUPS, TIMELINE } from '@/data';
import Reveal from '@/components/Reveal';
import { useCountUp } from '@/hooks';
import { useEffect, useState } from 'react';

const ICONS = { code: FiCode, layout: FiLayout, server: FiServer, database: FiDatabase, wrench: FiTool, sparkles: FiStar };

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1400, visible);
  useEffect(() => setVisible(true), []);
  return <div><p className="font-display text-3xl font-bold text-fg">{count}<span className="text-accent-400">{suffix}</span></p><p className="mt-1 text-xs text-muted">{label}</p></div>;
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-x">
        <Reveal><div className="mb-12"><p className="eyebrow">01 / About me</p><h2 className="heading-lg mt-4 text-fg">Curious mind.<br /><span className="gradient-text">Builder at heart.</span></h2></div></Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-6"><div><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-300 ring-1 ring-accent-500/25"><FiUser size={21} /></span><h3 className="mt-7 font-display text-2xl font-semibold text-fg">Who I am</h3></div><span className="font-mono text-xs text-accent-400">01</span></div>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{ABOUT.who}</p>
            <div className="mt-9 grid grid-cols-3 gap-5 border-t border-themed pt-7"><Stat value={3} suffix="+" label="Years learning" /><Stat value={12} suffix="+" label="Projects built" /><Stat value={5} suffix="" label="Tech areas" /></div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[{ icon: FiBookOpen, label: 'Education', value: ABOUT.education }, { icon: FiCode, label: 'Current status', value: ABOUT.status }, { icon: FiStar, label: 'My passion', value: ABOUT.passion }].map(({ icon: Icon, label, value }, i) => <Reveal key={label} delay={i * 0.08} className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30"><div className="flex items-center gap-3"><Icon size={17} className="text-accent-400" /><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{label}</p></div><p className="mt-3 text-sm leading-relaxed text-fg/80">{value}</p></Reveal>)}
          </div>
        </div>

        <Reveal className="mt-24"><p className="eyebrow">A short timeline</p><h3 className="mt-4 font-display text-2xl font-semibold text-fg">Where I’ve been building</h3></Reveal>
        <div className="relative mt-10 grid gap-4 md:grid-cols-4 md:gap-3"><div className="absolute left-0 right-0 top-4 hidden h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent md:block" />{TIMELINE.map((item, i) => <Reveal key={item.year + item.title} delay={i * 0.1} className="relative"><div className="mb-4 flex items-center gap-3 md:block"><span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-400/40 bg-bg text-[10px] font-bold text-accent-300 shadow-[0_0_15px_-3px_rgba(139,92,246,0.6)]">{i + 1}</span><span className="font-mono text-xs font-medium text-accent-300 md:mt-5 md:block">{item.year}</span></div><div className="glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/25"><h4 className="font-display text-sm font-semibold text-fg">{item.title}</h4><p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p></div></Reveal>)}</div>

        <Reveal className="mt-24"><p className="eyebrow">The toolkit</p><h3 className="mt-4 font-display text-2xl font-semibold text-fg">Skills I use to bring ideas to life</h3></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{SKILL_GROUPS.map(({ title, icon, skills }, i) => { const Icon = ICONS[icon]; return <Reveal key={title} delay={(i % 3) * 0.07} className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:shadow-glow"><div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20"><Icon size={17} /></span><h4 className="font-display text-sm font-semibold text-fg">{title}</h4></div><span className="font-mono text-[10px] text-muted">0{i + 1}</span></div><div className="mt-5 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="chip">{skill}</span>)}</div></Reveal>})}</div>
      </div>
    </section>
  );
}
