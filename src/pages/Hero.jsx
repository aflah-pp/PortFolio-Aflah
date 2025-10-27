import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useRef } from 'react'
import DpImg from '../assets/user.jpg'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 50])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 py-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.05)_0%,rgba(14,165,233,0.1)_50%,transparent_100%)] bg-[length:200%_200%]"
      />

      <motion.div
        style={{ y }}
        className="relative z-10 flex-1 max-w-2xl md:pr-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white"
        >
          Muhammed <span className="text-cyan-400">Aflah P P</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-zinc-400 mb-6"
        >
          Full-Stack Developer specializing in{' '}
          <span className="text-cyan-400 font-semibold">React</span>,{' '}
          <span className="text-cyan-400 font-semibold">
            Django REST Framework
          </span>
          , and <span className="text-cyan-400 font-semibold">PostgreSQL</span>.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-zinc-400 leading-relaxed text-base md:text-lg"
        >
          Passionate about crafting responsive, efficient, and elegant digital
          experiences. Always learning, improving, and pushing creative
          boundaries through clean, modern code.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ y: imageY }}
        className="relative z-10 flex-1 flex justify-center mb-12 md:mb-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl scale-110" />
          {/* Profile Image */}
          <img
            src={DpImg}
            alt="Aflah Portrait"
            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_50px_rgba(14,165,233,0.4)]"
          />
        </motion.div>
      </motion.div>

      {/* ====== Scroll Indicator ====== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-25 text-zinc-500 flex items-center gap-2 text-sm z-20"
      >
        <FiArrowDown className="animate-bounce text-cyan-400" /> Scroll to know
        more
      </motion.div>
    </motion.section>
  )
}

export default Hero
