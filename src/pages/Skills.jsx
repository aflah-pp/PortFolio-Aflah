import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { LuBrain, LuRepeat, LuUsers } from 'react-icons/lu';
import {
  SiTailwindcss,
  SiDjango,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiPostman,
  SiFigma,
  SiJquery,
  SiFramer,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';

const skillCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'Python', icon: <FaPython className="text-blue-300" /> },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Django', icon: <SiDjango className="text-green-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'BootStrap', icon: <FaBootstrap className="text-sky-400" /> },
      { name: 'JQuery', icon: <SiJquery className="text-sky-400" /> },
      { name: 'React Native', icon: <SiReact className="text-cyan-400" /> },
    ],
  },
  {
    title:"Database",
    items:[
      { name: 'SQL', icon: <SiMysql className="text-blue-200 " /> },
       { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
       { name: 'SQL-Lite', icon: <SiSqlite className="text-blue-500" /> },
    ]
  },
  {
    title: 'Tools & DB',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'VsCode', icon: <BiLogoVisualStudio className="text-blue-500" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'Framer', icon: <SiFramer className="text-teal-800 " /> },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Problem Solving', icon: <LuBrain className="text-pink-400" /> },
      { name: 'Adaptability', icon: <LuRepeat className="text-green-400" /> },
      { name: 'Teamwork', icon: <LuUsers className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] text-white py-32 overflow-hidden px-6"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent_70%)]" />

      <header className="text-center mb-48 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tighter"
        >
          Technical <span className="text-cyan-400">Stack</span>
        </motion.h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
      </header>

      <div className="max-w-6xl mx-auto relative flex flex-col items-center">

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-zinc-900 hidden md:block">
          <motion.div
            style={{ scaleY }}
            className="w-full h-full bg-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </div>

        <div className="w-full space-y-32 relative z-10">
          {skillCategories.map((category, i) => (
            <SkillFlowCard key={i} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillFlowCard = ({ category, index }) => {
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
        <div className="group bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
          <h3
            className={`text-2xl font-bold text-white mb-8 flex items-center gap-3 ${
              !isEven && 'md:justify-end'
            }`}
          >
            <span className="text-cyan-400 font-mono text-lg italic">0{index + 1}.</span>
            {category.title}
          </h3>

          <div className={`flex flex-wrap gap-3 ${!isEven && 'md:justify-end'}`}>
            {category.items.map((item, j) => (
              <motion.div
                key={j}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(34, 211, 238, 0.4)',
                  backgroundColor: 'rgba(34, 211, 238, 0.05)',
                }}
                className="flex items-center gap-3 px-4 py-2.5 bg-zinc-800/50 border border-white/5 rounded-xl transition-all group/pill"
              >
                <span className="text-2xl group-hover/pill:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-zinc-300 group-hover/pill:text-white transition-colors">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

export default Skills;
