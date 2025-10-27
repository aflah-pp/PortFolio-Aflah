import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from 'react-icons/fa'
import {
  LuBrain,
  LuLightbulb,
  LuRepeat,
  LuFeather,
  LuUsers,
} from 'react-icons/lu'
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
} from 'react-icons/si'
import { BiLogoVisualStudio } from 'react-icons/bi'

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
      { name: 'React Native', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'jQuery', icon: <SiJquery className="text-blue-400" /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      {
        name: 'VS Code',
        icon: <BiLogoVisualStudio className="text-blue-500" />,
      },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
      { name: 'Framer', icon: <SiFramer className="text-grey-500" /> },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-sky-400" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-gray-400" /> },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'Problem Solving', icon: <LuBrain className="text-pink-400" /> },
      {
        name: 'Critical Thinking',
        icon: <LuLightbulb className="text-yellow-400" />,
      },
      { name: 'Adaptability', icon: <LuRepeat className="text-green-400" /> },
      { name: 'Flexibility', icon: <LuFeather className="text-sky-400" /> },
      { name: 'Teamwork', icon: <LuUsers className="text-purple-400" /> },
    ],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] bg-gradient-to-b from-black via-zinc-950 to-black flex flex-col items-center py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700/20 blur-[180px]" />

      {/* Title */}
      <motion.h2
        style={{ opacity }}
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-white mb-32 text-center tracking-wide"
      >
        My Skills
      </motion.h2>

      {/* Skills Cards */}
      <div className="w-full max-w-5xl space-y-48 relative z-10">
        {skillCategories.map((category, i) => {
          const cardRef = useRef(null)
          const { scrollYProgress: cardScroll } = useScroll({
            target: cardRef,
            offset: ['start 0.9', 'start 0.3'],
          })

          const y = useTransform(cardScroll, [0, 1], [100, 0])
          const scale = useTransform(cardScroll, [0, 1], [0.9, 1])
          const opacity = useTransform(cardScroll, [0, 1], [0, 1])
          const rotateY = useTransform(cardScroll, [0, 1], [15, 0])

          return (
            <motion.div
              ref={cardRef}
              key={i}
              style={{ y, scale, opacity, rotateY }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className={`relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-12 text-white shadow-[0_0_25px_rgba(0,255,255,0.1)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] ${
                i % 2 === 0 ? 'md:mr-24 md:self-end' : 'md:ml-24 md:self-start'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] top-10 hidden md:block ${
                  i % 2 === 0 ? '-left-[2.7rem]' : '-right-[2.7rem]'
                }`}
              />

              {/* Category Title */}
              <h3 className="text-3xl font-semibold text-cyan-300 text-center mb-10">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <motion.ul
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {category.items.map((item, j) => (
                  <motion.li
                    key={j}
                    whileHover={{
                      scale: 1.1,
                      y: -6,
                      boxShadow: '0 0 20px rgba(0,255,255,0.25)',
                    }}
                    transition={{ type: 'spring', stiffness: 250, damping: 12 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-800/70 hover:bg-zinc-700/80 backdrop-blur-md transition-all duration-300 border border-zinc-700/50"
                  >
                    {item.icon && (
                      <motion.span
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 6 + Math.random() * 2,
                          ease: 'easeInOut',
                        }}
                        className="text-2xl flex-shrink-0"
                      >
                        {item.icon}
                      </motion.span>
                    )}
                    <span className="text-lg font-medium text-gray-300">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
