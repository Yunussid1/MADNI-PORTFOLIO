import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Instagram, Sparkles } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // GSAP Split Text Animation for title
    const ctx = gsap.context(() => {
      const chars = titleRef.current?.querySelectorAll('.char');
      if (chars) {
        gsap.fromTo(
          chars,
          { 
            opacity: 0, 
            y: 100,
            rotateX: -90 
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: 'power4.out',
            delay: 0.5,
          }
        );
      }
    }, containerRef);

    controls.start('visible');

    return () => ctx.revert();
  }, [controls]);

  // Split text into characters
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Floating Shapes Background */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-zinc-300">
            Available for freelance work
          </span>
        </motion.div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
          style={{ perspective: '1000px' }}
        >
          <span className="block text-white">
            {splitText('Madni Khan')}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light mb-4"
        >
          Graphics Designer & Content Creator
        </motion.p>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
          <span className="text-lg font-medium text-cyan-400 tracking-widest uppercase">
            MK Graphics
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-zinc-700 text-white font-semibold rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Instagram - mk.fithub */}
          <motion.a
            href="https://www.instagram.com/mk.fithub/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/5 transition-colors group bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-500/20 border border-pink-500/30"
          >
            <div className="relative">
              <Instagram className="w-5 h-5 text-pink-400" />
              <div className="absolute inset-0 bg-pink-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-zinc-300 group-hover:text-white transition-colors font-medium">
              @mk.fithub
            </span>
          </motion.a>

          {/* Secondary Instagram - mkvisuals.graphic */}
          <motion.a
            href="https://www.instagram.com/mkvisuals.graphic/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/5 transition-colors group"
          >
            <div className="relative">
              <Instagram className="w-5 h-5 text-purple-400" />
              <div className="absolute inset-0 bg-purple-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-zinc-300 group-hover:text-white transition-colors">
              @mkvisuals.graphic
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
