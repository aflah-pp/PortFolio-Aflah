import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const educationData = [
  {
    title: 'Bachelor of Commerce with Computer Application',
    school: 'NAHER Arts & Science College, Kanhirode, Kannur',
    gpa: 'Degree',
    period: 'Sept 2022 – April 2025',
    courses: 'Cost Accounting, Business Statistics, Tally, DBMS, IT for Business.',
  },
  {
    title: 'Online Full-Stack Development Certification',
    school: 'Steyp',
    gpa: 'Professional Certification',
    period: '2023 - 2024',
    courses:
      'Intensive training in HTML, CSS, JS, React, Django REST Framework, PostgreSQL, and Git.',
  },
];

const Education = () => {
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.05),transparent_70%)]" />


      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-black mb-32 text-center text-white tracking-tighter"
      >
        Edu<span className="text-cyan-400">cation</span>
      </motion.h2>

      <div className="w-full max-w-6xl relative flex flex-col items-center">

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-zinc-900 hidden md:block">
          <motion.div
            style={{ scaleY }}
            className="w-full h-full bg-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </div>


        <div className="w-full space-y-24 md:space-y-40 relative z-10">
          {educationData.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ edu, index }) => {
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
          <div className="flex flex-col gap-1 mb-6">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
              {edu.period}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {edu.title}
            </h3>
            <p className="text-zinc-400 font-medium text-lg italic">{edu.school}</p>
          </div>

          <div className="space-y-4">
            {edu.gpa && (
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold">
                {edu.gpa}
              </span>
            )}

            <p className="text-zinc-300 leading-relaxed text-[0.95rem] border-t border-white/5 pt-4">
              <strong className="text-zinc-100 block mb-1">Focus Areas:</strong>
              {edu.courses}
            </p>
          </div>


          <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-white/5 group-hover:bg-cyan-500/50 transition-colors" />
        </div>
      </div>


      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

export default Education;
