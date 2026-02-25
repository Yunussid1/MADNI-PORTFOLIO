// 1️⃣ imports
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

// 2️⃣ gsap plugin
gsap.registerPlugin(ScrollTrigger);

// 3️⃣ component
function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f]"
    >
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px]" />
      </motion.div>

      <ParticleBackground />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <SocialProof />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
