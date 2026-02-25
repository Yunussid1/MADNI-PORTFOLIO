import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Zap, Award, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Palette, value: "50+", label: "Projects Completed" },
  { icon: Zap, value: "3+", label: "Years Experience" },
  { icon: Award, value: "30+", label: "Happy Clients" },
  { icon: Target, value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text-line",
        { opacity: 0, y: 50, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Crafting Visual <span className="gradient-text">Stories</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: TEXT */}
          <div
            ref={textRef}
            className="space-y-8"
            style={{ perspective: "1000px" }}
          >
            <div className="about-text-line">
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
                I'm{" "}
                <span className="text-cyan-400 font-semibold">Madni Khan</span>,
                a passionate graphics designer and content creator based in the
                creative digital landscape.
              </p>
            </div>

            <div className="about-text-line">
              <p className="text-lg text-zinc-400 leading-relaxed">
                Through{" "}
                <span className="text-white font-medium">MK Graphics</span>, I
                transform ideas into stunning visual experiences. My work
                bridges the gap between aesthetics and functionality.
              </p>
            </div>

            <div className="about-text-line">
              <p className="text-lg text-zinc-400 leading-relaxed">
                From brand identities to social media content, I specialize in
                cohesive visual narratives that leave lasting impressions.
              </p>
            </div>

            {/* Skills */}
            <div className="about-text-line flex flex-wrap gap-3 pt-4">
              {[
                "Brand Design",
                "Social Media",
                "UI/UX",
                "Motion Graphics",
                "Content Strategy",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 rounded-full glass text-zinc-300 text-sm hover:bg-white/10 hover:text-cyan-400 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* RIGHT: VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

              {/* Visual container */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* BLUR BACKGROUND (ONLY THIS IS BLURRED) */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

                {/* CARD + LOGO (NOT BLURRED) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative w-32 h-32"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Glow layer */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600
                   rounded-2xl rotate-6 opacity-60 blur-sm"
                      style={{ transform: "translateZ(-10px)" }}
                    />

                    {/* Main card */}
                    <div
                      className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600
                   rounded-2xl flex items-center justify-center p-3"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <img
                        src="/logo2.png"
                        alt="MK Graphics Logo"
                        className="w-full h-full object-contain
                     drop-shadow-[0_0_25px_rgba(0,255,255,0.45)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
