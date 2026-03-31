import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

    const navLinks = [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ];

    const Navbar = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-serif"
            >
              DA.
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
              >
                <div className="flex flex-col p-6 gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
    };

    export default Navbar;