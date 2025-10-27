import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiGitlab, FiLinkedin, FiInstagram } from 'react-icons/fi'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px]" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-center z-10"
      >
        Let’s <span className="text-cyan-400">Connect</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-zinc-400 mb-10 text-center max-w-lg z-10"
      >
        Got an idea or a project in mind? I’d love to collaborate or help you
        bring it to life. Drop a message below — I usually reply within a day.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        action="https://formspree.io/f/xdkpadka" // ✅ Your Formspree endpoint
        method="POST"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-lg bg-zinc-900/60 backdrop-blur-lg border border-zinc-800 rounded-2xl p-8 shadow-lg space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-zinc-800/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-zinc-200 placeholder-zinc-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-zinc-800/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-zinc-200 placeholder-zinc-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          required
          className="w-full bg-zinc-800/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-zinc-200 placeholder-zinc-500"
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex gap-8 mt-12 text-2xl z-10"
      >
        {[
          {
            icon: <FiGithub />,
            href: 'https://github.com/aflah-pp',
          },
          {
            icon: <FiLinkedin />,
            href: 'https://linkedin.com/in/muhammed-aflahpp',
          },
          {
            icon: <FiInstagram />,
            href: 'https://instagram.com/afl_4h',
          },
          {
            icon: <FiGitlab />,
            href: 'https://gitlab.com/aflah-pp',
          },
        ].map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, color: '#22d3ee' }}
            className="text-zinc-400 hover:text-cyan-400 transition-all duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <p className="mt-10 text-sm text-[#00e1ff] z-10">
        © {new Date().getFullYear()} Muhammed Aflah — All Rights Reserved
      </p>
    </motion.section>
  )
}

export default Contact
