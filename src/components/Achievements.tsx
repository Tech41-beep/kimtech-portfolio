import { motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiAward,
  FiCheckCircle,
  FiExternalLink,
} from 'react-icons/fi';
import { ACHIEVEMENTS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Achievements() {
  const featured =
    ACHIEVEMENTS.find((item) => item.title.includes('Meta')) ?? ACHIEVEMENTS[0];
  const supporting = ACHIEVEMENTS.filter((item) => item !== featured);

  return (
    <section id="achievement" className="achievement-section section-pad relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="achievement-intro mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="achievement-kicker">02 / Achievements</p>
              <h2 className="achievement-heading mt-4">
                Proof of <span>progress.</span>
                <br />
                Built one milestone at a time.
              </h2>
            </div>
            <p className="achievement-intro-copy max-w-sm text-sm leading-relaxed">
              A growing archive of courses, community work, and projects that
              keep me curious and moving forward.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.article
            whileHover={{ y: -4 }}
            className="achievement-feature group"
          >
            <div className="achievement-feature-media">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <FiAward size={40} />
              )}
              <span className="achievement-feature-label">Featured certificate</span>
            </div>

            <div className="achievement-feature-content">
              <div className="flex items-center justify-between gap-4">
                <span className="achievement-year">{featured.year}</span>
                <FiCheckCircle className="text-[#1877f2]" size={22} />
              </div>
              <p className="achievement-meta mt-8">Meta · Coursera</p>
              <h3 className="achievement-feature-title mt-3">
                {featured.title.replace('Coursera: ', '')}
              </h3>
              <p className="achievement-feature-description mt-5">
                {featured.description}
              </p>
              {featured.image && (
                <a
                  href={featured.image}
                  target="_blank"
                  rel="noreferrer"
                  className="achievement-link mt-8"
                >
                  Open certificate <FiArrowUpRight size={16} />
                </a>
              )}
            </div>
          </motion.article>
        </Reveal>

        <div className="achievement-grid mt-5">
          {supporting.map((item, i) => {
            const isContain = item.imageFit === 'contain';

            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <motion.article
                  whileHover={{ y: -5 }}
                  data-cursor="hover"
                  className="achievement-card group"
                >
                  <div
                    className={`achievement-card-media ${isContain ? 'is-contain' : ''}`}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className={`h-full w-full transition-transform duration-700 ${isContain ? 'object-contain group-hover:scale-[1.03]' : 'object-cover group-hover:scale-105'}`}
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-[#1877f2]">
                        <FiAward size={30} />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                          Featured work
                        </span>
                      </div>
                    )}
                    <span className="achievement-card-year">{item.year}</span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="achievement-card-title">{item.title}</h3>
                      <FiAward className="mt-1 shrink-0 text-[#1877f2]" size={18} />
                    </div>
                    <p className="achievement-card-description mt-3">
                      {item.description}
                    </p>
                    {item.image && (
                      <a
                        href={item.image}
                        target="_blank"
                        rel="noreferrer"
                        className="achievement-link mt-5"
                      >
                        View certificate <FiExternalLink size={13} />
                      </a>
                    )}
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
