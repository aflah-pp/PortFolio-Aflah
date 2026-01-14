import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Cartify from '../assets/Cartify.png';
import NarrativeN from '../assets/NarrativeN.png';
import Ndrive from '../assets/N-Drive.png';

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const projects = [
    {
      title: 'N-Drive',
      description:
        'N-Drive is a full-stack cloud file management platform built with React (frontend) and Django REST Framework (backend).It allows users to securely upload, organize, share, and download files or folders — all with AI-assisted features like chat and image generation.',
      img: Ndrive,
      stack: ['React', 'TailwindCSS', 'Python', 'Django', 'AI-Integration', 'Cloudinary'],
      git: 'https://github.com/aflah-pp/N-Drive',
      demo: 'https://n-drive-app.netlify.app',
    },
    {
      title: 'Cartify - Full Stack Ecommerce',
      description:
        'Cartify is a modern, full-stack e-commerce platform built with React, Django REST Framework, TailwindCSS, and SQLite. It supports both regular users and sellers with full product management, JWT-based authentication, cart and checkout systems, a polished UI, and an AI-powered Help Center for automated support.',
      img: Cartify,
      stack: [
        'React',
        'TailwindCSS',
        'Python',
        'Django',
        'Framer-Motion',
        'Supabase',
        'Cloudinary',
      ],
      git: 'https://github.com/aflah-pp/Cartify',
      demo: 'https://app-cartify.netlify.app/',
    },
    {
      title: 'Narrative-Nexus',
      description:
        'A full-stack authoring + reading platform powered by React & Django.Write + edit stories and chapters (rich editor) . Reader mode with customizable view,Like, Bookmark, Like chapters, Get notified on chapter publish & Follows, Real-time global messaging between users, Upload cover images, profile pics, Follow users, view profiles, explore users',
      img: NarrativeN,
      stack: ['React', 'TailwindCSS', 'Python', 'Django', 'Supabase', 'Cloudinary'],
      git: '',
      demo: 'https://narrativrnexus.netlify.app/',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#030303] text-white py-20 overflow-x-hidden"
    >

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium tracking-widest uppercase"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              Works
            </span>
          </motion.h2>
        </header>

        <div className="flex flex-col gap-32 md:gap-64">
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

  // Parallax effect for image and text
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-12 md:gap-24`}
    >

      <div className="w-full md:w-3/5 group relative">
        <motion.div
          style={{ y: yImage }}
          className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
        </motion.div>


        <span className="absolute -bottom-10 -left-10 text-[12rem] font-bold text-white/5 select-none pointer-events-none hidden md:block">
          0{index + 1}
        </span>
      </div>


      <div className="w-full md:w-2/5 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            {project.git && (
              <a
                href={project.git}
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm transition-transform active:scale-95 hover:bg-cyan-400"
              >
                Source Code
                <ArrowIcon />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 text-white font-bold text-sm border border-white/10 transition-transform active:scale-95 hover:border-white/40"
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
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
    ></path>
  </svg>
);

export default Projects;
