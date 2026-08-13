import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLayers } from "react-icons/fi";
import { PROJECTS } from "@/data";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">03 / Selected work</p>
              <h2 className="heading-lg mt-4 text-fg">
                Things I’ve
                <br />
                <span className="gradient-text">built with purpose.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
              A selection of academic and personal projects exploring the full
              product journey.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-themed bg-white/[0.025] transition-all duration-300 hover:border-accent-500/35 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[25%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-950/70 text-accent-300 backdrop-blur">
                      <FiLayers size={15} />
                    </span>
                    <span className="font-mono text-[10px] text-white/70">
                      0{i + 1}
                    </span>
                  </div>
                  <a
                    href={project.demo}
                    aria-label={`Open ${project.title} demo`}
                    className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-ink-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <FiArrowUpRight size={17} />
                  </a>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.features && (
                    <ul className="mt-4 grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-[11px] text-fg/70">
                          <span className="mr-1.5 text-accent-400">+</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="chip !px-2.5 !py-0.5 !text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-4 border-t border-themed pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-fg"
                      >
                        <FiGithub size={14} /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 text-xs font-medium text-accent-300 transition-colors hover:text-accent-200"
                      >
                        Live demo <FiArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
