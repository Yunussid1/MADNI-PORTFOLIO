import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Heart, Users, TrendingUp, ExternalLink } from 'lucide-react';

const instagramStats = [
  { icon: Users, value: '105', label: 'Followers' },
  { icon: Heart, value: '3k', label: 'Total Likes' },
  { icon: TrendingUp, value: '52', label: 'Posts' },
];

const contentTypes = [
  { title: 'Fitness Motivation', description: 'Inspiring workout content and health tips' },
  { title: 'Design Showcases', description: 'Behind-the-scenes of creative projects' },
  { title: 'Lifestyle Content', description: 'Daily inspiration and personal growth' },
  { title: 'Creative Tips', description: 'Design tutorials and industry insights' },
];

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="social"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-pink-400 text-sm font-medium mb-6">
            <Instagram className="w-4 h-4" />
            Online Presence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Follow the <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Join my growing community on Instagram where I share fitness motivation, 
            design inspiration, and behind-the-scenes content.
          </p>
        </motion.div>

        {/* Instagram Handles Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Primary Instagram - mk.fithub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://www.instagram.com/mk.fithub/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <div className="relative glass rounded-3xl p-8 border border-white/10 group-hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
                      <div className="w-full h-full rounded-full bg-[#12121a] flex items-center justify-center">
                        <span className="text-2xl font-bold gradient-text">MK</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Handle info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                      @mk.fithub
                    </h3>
                    <p className="text-zinc-400 text-sm mb-2">
                      Primary Account
                    </p>
                    <div className="inline-flex items-center gap-2 text-pink-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Follow Now
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Secondary Instagram - mkvisuals.graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="https://www.instagram.com/mkvisuals.graphic/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <div className="relative glass rounded-3xl p-8 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full bg-[#12121a] flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-400">MK</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Handle info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      @mkvisuals.graphic
                    </h3>
                    <p className="text-zinc-400 text-sm mb-2">
                      Design Portfolio
                    </p>
                    <div className="inline-flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all">
                      Follow Now
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16"
        >
          {instagramStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl glass hover:bg-white/5 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-pink-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Types */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {contentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-colors"
            >
              <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                {type.title}
              </h4>
              <p className="text-sm text-zinc-400">
                {type.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <a
            href="https://www.instagram.com/mk.fithub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-shadow"
          >
            <Instagram className="w-5 h-5" />
            Follow @mk.fithub
          </a>
          <a
            href="https://www.instagram.com/mkvisuals.graphic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
          >
            <Instagram className="w-5 h-5" />
            Follow @mkvisuals.graphic
          </a>
        </motion.div>
      </div>
    </section>
  );
}
