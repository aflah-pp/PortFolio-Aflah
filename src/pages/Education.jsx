import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const educationData = [
  {
    title: 'Bachelor of Commerce with Computer Application',
    school: 'NAHER Arts & Science College, Kanhirode, Kannur',
    gpa: 'GPA: 7.2',
    period: 'Sept 2022 – April 2025',
    courses:
      'Relevant Courses: Cost Accounting, Business Statistics, Tally, DBMS, IT for Business etc.',
  },
  {
    title: 'Online Full-Stack Development Certification',
    school: 'Steyp',
    gpa: '',
    period: '2023 - 2024',
    courses:
      'Completed intensive training in modern full-stack development. Hands-on experience with HTML, CSS, JS, React, Django REST Framework, PostgreSQL, Git, and real-world projects.',
  },
]

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={ref}
      className="relative min-h-[180vh] bg-black flex flex-col items-center py-32 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-32 text-center text-white tracking-wide"
      >
        Education
      </motion.h2>

      {/* Central Timeline */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[12rem] w-[4px] h-[calc(100%-16rem)] bg-zinc-800 rounded-full hidden md:block overflow-hidden">
        <motion.div
          style={{ scaleY }}
          className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent origin-top rounded-full"
        />
      </div>

      {/* Education Cards */}
      <div className="w-full max-w-4xl space-y-52 relative z-10 perspective-[1000px]">
        {educationData.map((edu, i) => {
          const cardRef = useRef(null)
          const { scrollYProgress: cardScroll } = useScroll({
            target: cardRef,
            offset: ['start 0.9', 'start 0.3'],
          })

          const opacity = useTransform(cardScroll, [0, 1], [0, 1])
          const y = useTransform(cardScroll, [0, 1], [80, 0])
          const rotateY = useTransform(cardScroll, [0, 1], [12, 0])
          const scale = useTransform(cardScroll, [0, 1], [0.9, 1])

          return (
            <motion.div
              ref={cardRef}
              key={i}
              style={{ opacity, y, rotateY, scale }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              className={`relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 text-white shadow-[0_0_25px_rgba(0,255,255,0.1)] hover:shadow-[0_0_35px_rgba(0,255,255,0.2)] transform-gpu ${
                i % 2 === 0 ? 'md:mr-24 md:self-end' : 'md:ml-24 md:self-start'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] top-10 hidden md:block ${
                  i % 2 === 0 ? '-left-[2.7rem]' : '-right-[2.7rem]'
                }`}
              />

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold mb-2 text-cyan-300"
              >
                {edu.title}
              </motion.h3>
              <p className="text-gray-300 mb-1 text-lg font-medium">
                {edu.school}
              </p>
              {edu.gpa && (
                <p className="text-gray-400 mb-1 text-sm">{edu.gpa}</p>
              )}
              <p className="text-gray-400 mb-4 text-sm italic">{edu.period}</p>
              <p className="text-gray-300 leading-relaxed text-[1.05rem]">
                {edu.courses}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Education
