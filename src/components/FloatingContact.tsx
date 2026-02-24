import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Instagram, Phone, Linkedin } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling past hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916395075265', '_blank');
    setIsOpen(false);
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/mk.fithub/', '_blank');
    setIsOpen(false);
  };

  const handleInstagramDesignClick = () => {
    window.open('https://www.instagram.com/mkvisuals.graphic/', '_blank');
    setIsOpen(false);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/mk-graphics-adv/', '_blank');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Menu Options */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3 mb-2"
              >
                {/* Instagram Primary Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInstagramClick}
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
                >
                  <span className="text-white font-medium text-sm">@mk.fithub</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </motion.button>

                {/* Instagram Design Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInstagramDesignClick}
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
                >
                  <span className="text-white font-medium text-sm">@mkvisuals.graphic</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </motion.button>

                {/* LinkedIn Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLinkedInClick}
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
                >
                  <span className="text-white font-medium text-sm">Mk.graphics.adv</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                </motion.button>

                {/* WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
                >
                  <span className="text-white font-medium text-sm">+91 63950 75265</span>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              isOpen
                ? 'bg-gradient-to-br from-red-500 to-red-600 shadow-red-500/40'
                : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-purple-500/40'
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <MessageCircle className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </motion.button>

          {/* Pulse Animation Ring */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
