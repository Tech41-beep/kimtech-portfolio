import { useEffect, useRef, useState } from 'react';

/**
 * Typing/deleting animation cycling through a list of phrases.
 * Uses a blinking caret and respects prefers-reduced-motion (shows first word, static).
 */
export default function TypingText({
  words,
  className = '',
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1400,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const reduceRef = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (reduceRef.current) {
      setText(words[0] ?? '');
      return;
    }
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      timeout = window.setTimeout(() => {}, 120);
    } else {
      const speed = deleting ? deletingSpeed : typingSpeed;
      timeout = window.setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-label={words[index % words.length]}>
      <span className="gradient-text">{text}</span>
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent-400 align-middle text-transparent">
        |
      </span>
    </span>
  );
}
