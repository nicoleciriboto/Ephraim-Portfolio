import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import React from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-4 tracking-widest uppercase"
            >
              About Me
            </motion.p>
            
            <TypewriterHeading isInView={isInView} />
          </div>
          
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="opacity-80"
            >
              Creative digital marketer and UI/UX Designer passionate about helping brands connect with people. I specialize in creating data-driven strategies that amplify brand presence and drive sustainable growth. My approach combines creative thinking with analytical precision to deliver campaigns that resonate and convert.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="opacity-80"
            >
              From comprehensive SEO strategies to high-converting paid advertising campaigns, I help businesses navigate the complex digital landscape with confidence and clarity. Every project is an opportunity to push boundaries and achieve remarkable results.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="opacity-80"
            >
              I believe in the power of storytelling, authentic connections, and measurable outcomes. Let's collaborate to take your brand to the next level.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypewriterHeading({ isInView }: { isInView: boolean }) {
  const lines = [
    {
      parts: [
        { text: "Hi, I'm Ephraim T.O ", italic: false },
        { text: 'Buruvuru.', italic: true },
      ],
    },
    {
      parts: [
        { text: 'I am a digital ', italic: false },
        { text: 'marketer.', italic: true },
      ],
    },
    {
      parts: [
        { text: '& I am a web ', italic: false },
        { text: 'designer.', italic: true },
      ],
    },
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  // Build the full text for current line
  const buildFullText = (idx: number) =>
    lines[idx].parts.map((p) => p.text).join('');

  useEffect(() => {
    if (!isInView) return;

    const fullText = buildFullText(lineIndex);
    const typingSpeed = isDeleting ? 35 : 70;
    const pauseAtEndMs = 900;

    if (!isDeleting && charIndex <= fullText.length) {
      const id = setTimeout(() => {
        setDisplayed(fullText.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(id);
    }

    if (!isDeleting && charIndex > fullText.length) {
      const id = setTimeout(() => setIsDeleting(true), pauseAtEndMs);
      return () => clearTimeout(id);
    }

    if (isDeleting && charIndex >= 0) {
      const id = setTimeout(() => {
        setDisplayed(fullText.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, typingSpeed);
      return () => clearTimeout(id);
    }

    if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setLineIndex((i) => (i + 1) % lines.length);
      setCharIndex(0);
    }
  }, [charIndex, isDeleting, isInView, lineIndex]);

  // Split displayed text into parts respecting italics boundaries
  const renderParts = () => {
    const parts = lines[lineIndex].parts;
    const fullText = buildFullText(lineIndex);
    const current = displayed;

    const rendered: React.ReactNode[] = [];
    let consumed = 0;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const remainingForPart = Math.max(
        0,
        Math.min(current.length - consumed, part.text.length)
      );
      const slice = part.text.slice(0, remainingForPart);
      consumed += remainingForPart;
      if (!slice) break;
      rendered.push(
        <span key={i} className={part.italic ? 'italic' : undefined}>
          {slice}
        </span>
      );
    }

    // Cursor
    rendered.push(
      <span key="cursor" className="ml-1 inline-block w-2 bg-current animate-pulse" style={{ height: '1em' }} />
    );

    return rendered;
  };

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 }}
      style={{ fontSize: '3rem', lineHeight: '1.2', fontWeight: '600' }}
      className="mb-6"
    >
      {renderParts()}
    </motion.h2>
  );
}
