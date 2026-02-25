import { motion } from 'framer-motion';
import { Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/mk.fithub/', label: 'Instagram @mk.fithub', color: 'hover:text-pink-400' },
  { icon: Instagram, href: 'https://www.instagram.com/mkvisuals.graphic/', label: 'Instagram @mkvisuals.graphic', color: 'hover:text-purple-400' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mk-graphics-8151822b3/', label: 'LinkedIn Mk.graphics.adv', color: 'hover:text-blue-500' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-17 h-16 flex items-center justify-center">
    <img
      src="logo.png"
      alt="MK Graphics Logo"
      className="w-full h-full object-contain"
    />
  </div>
              <div>
              </div>
            </div>
            <p className="text-zinc-400 max-w-md mb-6">
              Crafting visual stories that inspire and engage. Specializing in brand identity, 
              social media content, and creative design solutions.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>
                <a 
                  href="https://www.instagram.com/mk.fithub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  @mk.fithub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/mkvisuals.graphic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  @mkvisuals.graphic
                </a>
              </li>
              <li>
                <a 
                  href="mailto:madnikhan9193@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  madnikhan9193@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/916395075265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  +91 63950 75265
                </a>
              </li>
              <li>Available Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Piyare bhai
          </p>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} MK Graphics. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
