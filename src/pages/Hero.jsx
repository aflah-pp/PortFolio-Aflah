import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { FiCoffee, FiDownload, FiSpeaker } from 'react-icons/fi';
import DpImg from '../assets/user.jpg';
import ResumePDF from '../assets/resume.pdf';

const Hero = () => {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);

  const handleMouseMove = e => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -12, y: x * 12 });
  };

  return (
    <section ref={containerRef} className="relative h-screen bg-[#030303]">
      <div className="hidden md:block">
        <ParticleField scrollYProgress={scrollYProgress} />
      </div>

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)',
            backgroundSize: '36px 36px',
          }}
        />

        <motion.div
          style={{ opacity, scale }}
          className="
            relative z-10 max-w-7xl w-full px-6
            grid grid-cols-1 md:grid-cols-12 gap-10 items-center
          "
        >
          <div className="order-1 md:order-2 md:col-span-4 flex justify-center">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setRotate({ x: 0, y: 0 })}
              style={{
                perspective: '1000px',
                rotateX: rotate.x,
                rotateY: rotate.y,
              }}
              className="relative w-44 h-56 md:w-80 md:h-[440px]"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full scale-75" />
              <div className="relative h-full w-full bg-zinc-900 border-4 md:border-6 border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={DpImg}
                  alt="Aflah portrait"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            </motion.div>
          </div>

          <div className="order-2 md:order-1 md:col-span-5 text-center md:text-left space-y-4">
            <span className="hidden md:inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest uppercase">
              Full Stack Developer
            </span>

            <h1 className="text-3xl md:text-7xl font-black text-white tracking-tight leading-tight">
              Muhammed <br />
              <span className="text-cyan-400">Aflah P P</span>
            </h1>

            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Full Stack Developer focused on building clean, scalable web applications using{' '}
              <span className="text-white">React</span>,{' '}
              <span className="text-white">Django REST Framework</span>, and{' '}
              <span className="text-white">PostgreSQL</span>. I enjoy solving real-world problems
              with simple, efficient code and creating software that delivers real impact.
            </p>

            <motion.a
              href={ResumePDF}
              download="Aflah_Resume.pdf"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white rounded-xl"
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <motion.rect
                  x="1"
                  y="1"
                  width="98"
                  height="38"
                  rx="10"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeDasharray="260"
                  variants={{
                    rest: { pathLength: 0, opacity: 0.4 },
                    hover: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 0.5, ease: 'easeOut' },
                    },
                  }}
                />
              </svg>

              <FiDownload className="text-cyan-400" />
              <span className="relative z-10">Resume</span>
            </motion.a>
          </div>

          <div className="hidden md:flex md:col-span-3 flex-col gap-6 opacity-70">
            <AboutCard
              icon={<FiCoffee className="text-cyan-400" />}
              title="Coffee First ☕"
              desc="Everything starts after caffeine"
            />
            <AboutCard
              icon={<FiSpeaker className="text-pink-400" />}
              title="Low Noise Mode 🌿"
              desc="Peace over pressure"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ParticleField = ({ scrollYProgress }) => {
  const particles = useMemo(() => Array.from({ length: 80 }), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((_, i) => (
        <Particle key={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

const Particle = ({ scrollYProgress }) => {
  const startX = useMemo(() => Math.random() * 100, []);
  const startY = useMemo(() => Math.random() * 100, []);

  const driftX = useMemo(() => Math.random() * 40 - 10, []);
  const driftY = useMemo(() => Math.random() * 40 - 10, []);

  const x = useTransform(scrollYProgress, [0, 1], [`${startX}%`, '50%']);
  const y = useTransform(scrollYProgress, [0, 1], [`${startY}%`, '100%']);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0.6, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <motion.div
      style={{ left: x, top: y, opacity, scale }}
      animate={{
        x: [`${driftX * -1}px`, `${driftX}px`],
        y: [`${driftY * -1}px`, `${driftY}px`],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
    />
  );
};

const AboutCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ x: -8 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:border-cyan-500/30"
    >
      <div className="p-3 bg-zinc-800 rounded-xl text-xl">{icon}</div>
      <div>
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-zinc-500 text-xs uppercase tracking-wider">{desc}</p>
      </div>
    </motion.div>
  );
};

export default Hero;
