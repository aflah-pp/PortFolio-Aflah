import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Cartify from '../assets/Cartify.png';
import NarrativeN from '../assets/NarrativeN.png';
import Ndrive from '../assets/N-Drive.png';

const Projects = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end end'],
  });

  const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const projects = [
    {
      title: 'N-Drive',
      description:
        'Full-stack cloud file management platform built with React and Django. Securely upload, organize, and share files with AI-assisted features.',
      img: Ndrive,
      stack: ['React', 'Django', 'TailwindCSS', 'AI-Integration'],
      git: 'https://github.com/aflah-pp/N-Drive',
      demo: 'https://n-drive-app.netlify.app',
    },
    {
      title: 'Cartify',
      description:
        'Modern e-commerce platform with JWT authentication, full product management for sellers, and an AI-powered Help Center.',
      img: Cartify,
      stack: ['React', 'Django', 'Supabase', 'Framer-Motion'],
      git: 'https://github.com/aflah-pp/Cartify',
      demo: 'https://app-cartify.netlify.app/',
    },
    {
      title: 'Narrative-Nexus',
      description:
        'A social authoring platform with rich text editing, global messaging, and real-time notifications for chapter updates.',
      img: NarrativeN,
      stack: ['React', 'Django', 'Supabase', 'Cloudinary'],
      git: '',
      demo: 'https://narrativrnexus.netlify.app/',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#030303] text-white py-32 overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >

          <path
            d="M 500 0 C 800 200, 950 300, 850 400 C 700 550, 100 450, 150 700 C 200 900, 300 950, 500 1000"
            stroke="rgba(34, 211, 238, 0.08)"
            strokeWidth="1"
          />


          <motion.path
            ref={pathRef}
            d="M 500 0 C 800 200, 950 300, 850 400 C 700 550, 100 450, 150 700 C 200 900, 300 950, 500 1000"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeLinecap="round"
            style={{
              pathLength: scrollSpring,
              filter: 'drop-shadow(0px 0px 6px #22d3ee)',
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="mb-48 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium tracking-widest uppercase"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter"
          >
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
              Works
            </span>
          </motion.h2>
        </header>

        <div className="flex flex-col gap-64 md:gap-96">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`relative flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-16 md:gap-32`}
    >
      <span
        className={`absolute -top-24 ${
          isEven ? '-left-10' : '-right-10'
        } text-[18rem] font-black text-white/[0.02] select-none pointer-events-none hidden md:block italic`}
      >
        0{index + 1}
      </span>

      <div className="w-full md:w-3/5 group relative z-10">
        <motion.div
          style={{ y: yImage }}
          className="relative aspect-video overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        </motion.div>
      </div>

      <div className="w-full md:w-2/5 flex flex-col items-start z-10">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h3 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xl leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-6 pt-6">
            <a
              href={project.git}
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm transition-all hover:bg-cyan-400"
            >
              Source Code <ArrowIcon />
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-bold text-sm border border-white/10 transition-all hover:border-cyan-400/40"
            >
              Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
  >
    <path
      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export default Projects;
