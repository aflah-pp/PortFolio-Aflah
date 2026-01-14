import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '../pages/Hero';
import Skills from '../pages/Skills';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Experience from '../pages/Experience';

export const PortfolioScrollReveal = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-zinc-950 text-white overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-zinc-950/70 to-transparent pointer-events-none z-40" />
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-zinc-950/70 to-transparent pointer-events-none z-40" />

      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};
