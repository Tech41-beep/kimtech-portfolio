import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { ACHIEVEMENTS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Achievements() {
  return (
    <section id="achievement" className="section-pad relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="mb-12">
            <p className="eyebrow">02 / Achievements</p>
            <h2 className="heading-lg mt-4 text-fg">
              Small wins.
              <br />
              <span className="gradient-text">Meaningful milestones.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              Every achievement is a reminder to stay curious, keep showing up,
              and make the next thing a little better.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => {
            const isContain = item.imageFit === 'contain';

            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 0.08}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  className="glass group overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-glow"
                >
                  <div
                    className={`relative overflow-hidden ${isContain ? 'h-56 bg-white/95 p-3' : 'h-44'}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className={`h-full w-full grayscale-[20%] transition-transform duration-700 ${isContain ? 'object-contain group-hover:scale-100' : 'object-cover group-hover:scale-105'}`}
                    />
                    {!isContain && (
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
                    )}
                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 font-mono text-[10px] text-accent-300 backdrop-blur">
                      {item.year}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-fg">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                      <FiAward
                        className="mt-1 shrink-0 text-accent-400"
                        size={19}
                      />
                    </div>

                    <a
                      href={item.image}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-accent-300 transition-colors hover:text-accent-200"
                    >
                      View certificate <FiExternalLink size={13} />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
