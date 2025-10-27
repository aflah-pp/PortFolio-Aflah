import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Cartify from '../assets/Cartify.png'
import NarrativeN from '../assets/NarrativeN.png'
import Ndrive from '../assets/N-Drive.png'

const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const projects = [
    {
      title: 'N-Drive',
      description:
        'N-Drive is a full-stack cloud file management platform built with React (frontend) and Django REST Framework (backend).It allows users to securely upload, organize, share, and download files or folders — all with AI-assisted features like chat and image generation.',
      img: Ndrive,
      stack: [
        'React',
        'TailwindCSS',
        'Python',
        'Django',
        'AI-Integration',
        'Cloudinary',
      ],
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
      stack: [
        'React',
        'TailwindCSS',
        'Python',
        'Django',
        'Supabase',
        'Cloudinary',
      ],
      git: '',
      demo: 'https://narrativrnexus.netlify.app/',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)] blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mt-32 mb-24 text-center tracking-tight"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <div className="flex flex-col gap-44 w-full max-w-6xl px-6 md:px-12">
        {projects.map((p, i) => {
          const xImg = useTransform(
            scrollYProgress,
            [0, 1],
            [i % 2 === 0 ? -50 : 50, 0]
          )
          const xText = useTransform(
            scrollYProgress,
            [0, 1],
            [i % 2 === 0 ? 50 : -50, 0]
          )

          return (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Card */}
              <motion.div
                style={{ x: xImg }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                whileHover={{
                  rotateY: i % 2 === 0 ? 6 : -6,
                  scale: 1.05,
                  boxShadow: '0px 20px 60px rgba(14,165,233,0.3)',
                }}
                className="relative w-full md:w-1/2 rounded-3xl overflow-hidden cursor-pointer transform-gpu"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[320px] md:h-[420px] object-cover rounded-3xl transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm text-cyan-400 font-semibold tracking-wide">
                    {p.title}
                  </span>
                </div>
              </motion.div>

              {/* Text Section */}
              <motion.div
                style={{ x: xText }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
                  {p.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5">
                  {p.stack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-200 backdrop-blur-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {p.git && (
                    <a
                      href={p.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all shadow-lg hover:shadow-cyan-500/50"
                    >
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition-all shadow-lg hover:shadow-green-500/50"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <div className="h-32" />
    </section>
  )
}

export default Projects
