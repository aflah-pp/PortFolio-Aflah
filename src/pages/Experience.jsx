import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experienceData = [
  {
    title: 'Junior Software Engineer',
    company: 'Yuai Soft Solutions',
    period: 'December 2025 – Present',
    responsibilities: [
      'Working on full-stack application development and maintenance.',
      'Collaborating with senior engineers to implement features, fix bugs, and improve system performance.',
      'Contributing to backend APIs and frontend UI components using modern web technologies.',
    ],
  },
  {
    title: 'Freelance Full-Stack Developer',
    period: 'July 2025 – September 2025',
    techStack: ['React.js', 'Tailwind CSS', 'Django', 'DRF', 'Electron.js', 'Supabase', 'Netlify'],
    responsibilities: [
      'Designed and developed a production-ready full-stack employee scheduling system.',
      'Built role-based dashboards for Admin, Manager, and Employee users.',
      'Developed an Electron-based desktop application for cross-platform utility.',
      'Integrated REST APIs for secure and scalable frontend–backend communication.',
    ],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] flex flex-col items-center py-32 px-6 overflow-hidden"
    >

      <div className="absolute top-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.05),transparent_70%)]" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-black mb-32 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 tracking-tighter"
      >
        Work <span className="text-cyan-400">Experience</span>
      </motion.h2>

      <div className="w-full max-w-6xl relative flex flex-col items-center">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-zinc-900 hidden md:block">
          <motion.div
            style={{ scaleY }}
            className="w-full h-full bg-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </div>

        <div className="w-full space-y-24 md:space-y-40 relative z-10">
          {experienceData.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className={`relative flex flex-col w-full items-center ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 top-10 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] hidden md:block z-20"
      />


      <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
          <span className="block text-xs font-mono tracking-widest text-cyan-400 mb-4 uppercase">
            {exp.period}
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {exp.title}
          </h3>

          {exp.company && <p className="text-zinc-400 font-medium text-lg mb-6">{exp.company}</p>}

          <ul className="space-y-3 mb-8">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="text-zinc-300 text-sm leading-relaxed flex gap-3">
                <span className="text-cyan-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_cyan]" />
                {item}
              </li>
            ))}
          </ul>

          {exp.techStack && (
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {exp.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[10px] font-bold rounded-lg bg-zinc-800 text-zinc-400 border border-zinc-700 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

export default Experience;
