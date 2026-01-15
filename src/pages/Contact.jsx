import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiGitlab, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi';

/* ================= CONTACT MAIN ================= */

const Contact = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 15 });

  /* ANIMATIONS */
  const sectionOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const sectionScale = useTransform(smoothProgress, [0, 0.2], [0.95, 1]);
  const bulbY = useTransform(smoothProgress, [0, 0.4], [-200, 0]);
  const bulbGlow = useTransform(
    smoothProgress,
    [0.35, 0.5],
    ['0 0 0px rgba(34,211,238,0)', '0 0 100px 10px rgba(34,211,238,0.8)']
  );
  const coneScale = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const coneOpacity = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);
  const nameY = useTransform(smoothProgress, [0.3, 1], [50, -50]);
  const nameOpacity = useTransform(smoothProgress, [0.2, 0.3], [0, 0.15]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="relative min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      <motion.div
        style={{ opacity: nameOpacity, y: nameY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <span className="text-[12vw] font-black text-white select-none italic uppercase tracking-tighter">
          Muhammed Aflah
        </span>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-10 flex justify-center">
        <motion.div
          style={{ scaleX: coneScale, opacity: coneOpacity, transformOrigin: 'top' }}
          className="absolute top-[80px] w-[120vw] h-[150vh]"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                'conic-gradient(from 165deg at 50% 0%, transparent, rgba(34,211,238,0.1) 15%, rgba(34,211,238,0.02) 50%, transparent)',
              filter: 'blur(40px)',
            }}
          />
        </motion.div>

        <motion.div style={{ y: bulbY }} className="relative flex flex-col items-center">
          <div className="w-[2px] h-32 bg-gradient-to-b from-zinc-800 to-zinc-500" />
          <motion.div
            style={{ boxShadow: bulbGlow }}
            className="w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />
        </motion.div>
      </div>

      <div className="relative z-20 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-4">
              Let’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Connect.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-sm mx-auto lg:mx-0 font-medium italic">
              "Precision is the only thing that scales."
            </p>
          </motion.div>

          <div className="flex justify-center lg:justify-start gap-4">
            {socialLinks.map((link, i) => (
              <SocialIcon key={i} link={link} delay={i * 0.01} />
            ))}
          </div>
        </div>

        <motion.form
          action="https://formspree.io/f/xdkpadka"
          method="POST"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // bg-transparent ensures the background is clear
          // border-cyan-500/20 adds the faint, transparent cyan edge
          className="relative p-10 space-y-6 border border-cyan-500/20 rounded-[3rem] bg-transparent backdrop-blur-[2px]"
        >
          <div className="space-y-6">
            <AnimatedInput name="name" placeholder="Name" required />
            <AnimatedInput type="email" name="email" placeholder="Email Address" required />
            <AnimatedTextArea name="message" placeholder="What's on your mind?" required />
          </div>

          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: '#22d3ee',
              color: '#000',
              boxShadow: '0 0 20px rgba(34,211,238,0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl"
          >
            <FiSend className="text-xl" />
            <span className="uppercase tracking-widest text-sm">Send Message</span>
          </motion.button>
        </motion.form>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 text-center text-[10px] text-zinc-600 font-mono tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} Muhammed Aflah
      </footer>
    </motion.section>
  );
};

const AnimatedInput = props => (
  <div className="relative group border-b border-white/10 focus-within:border-cyan-500 transition-colors duration-500">
    <input
      {...props}
      className="w-full bg-transparent px-2 py-4 text-white placeholder-zinc-700 focus:outline-none transition-all"
    />
  </div>
);

const AnimatedTextArea = props => (
  <div className="relative group border-b border-white/10 focus-within:border-cyan-500 transition-colors duration-500">
    <textarea
      {...props}
      rows="4"
      className="w-full bg-transparent px-2 py-4 text-white placeholder-zinc-700 focus:outline-none transition-all resize-none"
    />
  </div>
);

const SocialIcon = ({ link, delay }) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ y: -8, color: '#22d3ee' }}
    className="p-5 bg-zinc-900/30 border border-white/5 rounded-3xl text-zinc-500 transition-all backdrop-blur-sm"
  >
    <div className="text-2xl">{link.icon}</div>
  </motion.a>
);

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com/aflah-pp' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/muhammed-aflahpp' },
  { icon: <FiInstagram />, href: 'https://instagram.com/afl_4h' },
  { icon: <FiGitlab />, href: 'https://gitlab.com/aflah-pp' },
];

export default Contact;
