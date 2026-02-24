import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Instagram, MapPin, Clock, CheckCircle, Linkedin, AlertCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setSubmitError('Please fill in all fields before submitting.');
      setTimeout(() => setSubmitError(''), 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setSubmitError('Please enter a valid email address.');
      setTimeout(() => setSubmitError(''), 3000);
      return;
    }

    setSubmitError('');
    setIsLoading(true);
    
    try {
      // Create WhatsApp message with all details
      const message = `Hello Madni Khan,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      const whatsappURL = `https://wa.me/916395075265?text=${encodeURIComponent(message)}`;
      
      // Also send to email using a reliable backend
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8f8de9c3-3f21-4d3f-938c-17cf7ee49370',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Contact Form Submission from ${formState.name}`,
        }),
      });

      if (emailResponse.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        
        // Open WhatsApp in new tab
        setTimeout(() => {
          window.open(whatsappURL, '_blank');
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
        }, 1000);
      } else {
        // Even if email fails, still open WhatsApp
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          window.open(whatsappURL, '_blank');
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
        }, 1000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback: Always open WhatsApp even if there's an error
      const message = `Hello Madni Khan,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      const whatsappURL = `https://wa.me/916395075265?text=${encodeURIComponent(message)}`;
      
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Create <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how 
            we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Instagram Primary */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Instagram (Primary)</p>
                    <a 
                      href="https://www.instagram.com/mk.fithub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-pink-400 transition-colors"
                    >
                      @mk.fithub
                    </a>
                  </div>
                </div>

                {/* Instagram Secondary */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Instagram (Design)</p>
                    <a 
                      href="https://www.instagram.com/mkvisuals.graphic/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-cyan-400 transition-colors"
                    >
                      @mkvisuals.graphic
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/mk-graphics-8151822b3/"
                      target="_blank"https://www.linkedin.com/in/mk-graphics-8151822b3/
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-blue-400 transition-colors"
                    >
                      MK GRAPHICS
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Email</p>
                    <a 
                      href="mailto:madnikhan9193@gmail.com"
                      className="text-white font-medium hover:text-yellow-400 transition-colors"
                    >
                      madnikhan9193@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">WhatsApp</p>
                    <a 
                      href="https://wa.me/916395075265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-green-400 transition-colors"
                    >
                      +91 63950 75265
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Location</p>
                    <p className="text-white font-medium">
                      Available Worldwide
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Availability</p>
                    <p className="text-white font-medium">
                      Open for freelance projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="glass rounded-2xl p-6 border-l-4 border-cyan-500">
              <p className="text-zinc-300">
                <span className="text-cyan-400 font-semibold">Quick Response:</span> I typically 
                respond to all inquiries within 24 hours. For urgent projects, feel free to 
                reach out on Instagram.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-6"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{submitError}</p>
                </motion.div>
              )}

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Sent Successfully! ✨
                  </h4>
                  <p className="text-zinc-400 mb-2">
                    Your message is being sent to WhatsApp and email.
                  </p>
                  <p className="text-sm text-zinc-500">
                    WhatsApp will open in a new tab. I'll respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
