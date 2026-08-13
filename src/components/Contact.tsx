import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiArrowUp,
} from "react-icons/fi";
import { CONTACT } from "@/data";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    window.setTimeout(() => setSent(false), 5000);
  };
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-600/10 blur-[120px]" />
      <div className="container-x relative">
        <Reveal>
          <div className="mb-12">
            <p className="eyebrow">04 / Contact</p>
            <h2 className="heading-lg mt-4 text-fg">
              Let’s make something
              <br />
              <span className="gradient-text">worth building.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
              Have an idea, an opportunity, or just want to say hello? My inbox
              is always open.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-accent-500/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                <FiMail size={17} />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="mt-1 block text-sm text-fg">
                  {CONTACT.email}
                </span>
              </span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-accent-500/30"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                <FiPhone size={17} />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  Phone
                </span>
                <span className="mt-1 block text-sm text-fg">
                  {CONTACT.phone}
                </span>
              </span>
            </a>
            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                <FiMapPin size={17} />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  Location
                </span>
                <span className="mt-1 block text-sm text-fg">
                  {CONTACT.location}
                </span>
              </span>
            </div>
            <div className="flex gap-2 pt-3">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !rounded-xl !p-3"
                aria-label="GitHub"
              >
                <FiGithub size={17} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost !rounded-xl !p-3"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={17} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="glass rounded-3xl p-6 sm:p-8">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Your name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Lov Kimtech"
                    className="w-full rounded-xl border border-themed bg-white/[0.03] px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500/60"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Email address
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-themed bg-white/[0.03] px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500/60"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Your message
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me a little about your idea..."
                  className="w-full resize-none rounded-xl border border-themed bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-accent-500/60"
                />
              </label>
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                {sent ? (
                  <>
                    <FiCheck size={16} /> Message ready to send
                  </>
                ) : (
                  <>
                    <FiSend size={16} /> Send message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-themed px-5 py-8 sm:px-8 lg:px-12">
      <div className="container-x flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          Designed &amp; Developed by{" "}
          <span className="text-accent-300">Lov Kimtech</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-muted">© 2026</span>
          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-themed text-muted transition-all hover:border-accent-500/40 hover:text-accent-300"
            aria-label="Back to top"
          >
            <FiArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
