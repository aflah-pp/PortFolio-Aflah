import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiGitlab, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="relative min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      <ContactParticles scrollYProgress={scrollYProgress} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.02),transparent_70%)]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />

      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6">
              Let’s <br /> <span className="text-cyan-400">Connect.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Got an idea or a project in mind? I’d love to collaborate or help you bring it to
              life. Drop a message — I usually reply within a day.
            </p>
          </motion.div>

          <div className="flex justify-center lg:justify-start gap-6">
            {socialLinks.map((link, i) => (
              <SocialIcon key={i} link={link} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <motion.form
          action="https://formspree.io/f/xdkpadka"
          method="POST"
          className="relative group bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl space-y-6"
        >
          <div className="space-y-4">
            <AnimatedInput type="text" name="name" placeholder="Your Name" required />
            <AnimatedInput type="email" name="email" placeholder="Your Email" required />
            <AnimatedTextArea name="message" placeholder="Your Message..." required />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="relative w-full py-4 bg-white text-black font-bold rounded-xl overflow-hidden flex items-center justify-center gap-3 group transition-colors hover:bg-cyan-400"
          >
            <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      </div>

      <footer className="mt-20 text-center z-10">
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mb-6" />
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Muhammed Aflah — Umm..Thank You ,I Guess
        </p>
      </footer>
    </motion.section>
  );
};

const ContactParticles = ({ scrollYProgress }) => {
  const particles = useMemo(() => Array.from({ length: 80 }), []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((_, i) => (
        <SpreadParticle key={i} index={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

const SpreadParticle = ({ index, scrollYProgress }) => {
  // Random end positions for the "spread"
  const endX = useMemo(() => (Math.random() - 0.5) * 100 + 50, []); // 0% to 100%
  const endY = useMemo(() => Math.random() * 100, []);

  // Starts at center line (50%) and spreads out as scroll hits the bottom
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ['50%', '50%', `${endX}%`]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${endY}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0, 1, 0.5]);

  return (
    <motion.div
      style={{ left: x, top: y, opacity, scale }}
      animate={{
        opacity: [0.4, 1, 0.4],
        boxShadow: ['0 0 5px #22d3ee', '0 0 15px #22d3ee', '0 0 5px #22d3ee'],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
    />
  );
};

const AnimatedInput = props => (
  <div className="relative group">
    <input
      {...props}
      className="w-full bg-zinc-800/30 border border-white/5 rounded-xl px-5 py-4 focus:outline-none text-white placeholder-zinc-600 transition-all focus:bg-zinc-800/60"
    />
    <div className="absolute inset-0 border border-cyan-500/0 group-focus-within:border-cyan-500/40 rounded-xl pointer-events-none transition-all duration-500" />
  </div>
);

const AnimatedTextArea = props => (
  <div className="relative group">
    <textarea
      {...props}
      rows="4"
      className="w-full bg-zinc-800/30 border border-white/5 rounded-xl px-5 py-4 focus:outline-none text-white placeholder-zinc-600 transition-all focus:bg-zinc-800/60 resize-none"
    />
    <div className="absolute inset-0 border border-cyan-500/0 group-focus-within:border-cyan-500/40 rounded-xl pointer-events-none transition-all duration-500" />
  </div>
);

const SocialIcon = ({ link, delay }) => (
  <motion.a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -5, color: '#22d3ee' }}
    className="p-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-400 transition-all shadow-xl"
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
