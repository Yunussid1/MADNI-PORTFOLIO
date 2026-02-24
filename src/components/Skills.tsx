import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, 
  Layers, 
  Share2, 
  Sparkles,
  PenTool,
  Image,
  Video,
  Megaphone
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visuals that communicate your brand message with clarity and impact. From posters to digital artwork.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    description: 'Building cohesive brand systems including logos, color palettes, typography, and brand guidelines that stand out.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Share2,
    title: 'Social Media Content',
    description: 'Engaging content tailored for Instagram, Facebook, and other platforms that drives engagement and growth.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Creative Visuals',
    description: 'Eye-catching visual content including banners, thumbnails, and promotional materials that capture attention.',
    color: 'from-amber-400 to-orange-500',
  },
];

const tools = [
  { name: 'Adobe Photoshop', icon: Image, level: 95 },
  { name: 'Adobe Illustrator', icon: PenTool, level: 90 },
  { name: 'CorelDRAW', icon: Image, level: 92 },
  { name: 'Adobe Premiere', icon: Video, level: 85 },
  { name: 'Social Media Marketing', icon: Megaphone, level: 88 },
  { name: 'Creative Content Strategy', icon: Sparkles, level: 90 },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm font-medium mb-6">
            Services & Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What I <span className="gradient-text">Create</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Transforming ideas into visual masterpieces through a blend of creativity, 
            technical expertise, and strategic thinking.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative glass rounded-3xl p-8 h-full overflow-hidden">
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tools & Expertise
            </h3>
            <p className="text-zinc-400">
              Proficient in industry-standard tools and techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <tool.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-medium">{tool.name}</span>
                  </div>
                  <span className="text-zinc-400 text-sm">{tool.level}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tool.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-6">
            Have a project in mind? Let's create something amazing together.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full"
          >
            Start a Project
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
