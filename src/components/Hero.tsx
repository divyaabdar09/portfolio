import React from 'react';
    import { motion } from 'framer-motion';
    import { ChevronDown, Download, ExternalLink } from 'lucide-react';

    const Hero = () => {
      return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-violet-400 uppercase">
                Available for new opportunities
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
                Divya <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Abdar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Software Engineer | Backend & Full-Stack Developer
                <span className="block mt-2 text-foreground/80 italic">"Building scalable systems, APIs, and impactful digital solutions"</span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                >
                  View Projects <ExternalLink size={18} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  Download Resume <Download size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[10%] hidden lg:block p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
              <span className="text-xs font-mono text-white/70">System Status: Online</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 left-[10%] hidden lg:block p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="space-y-2">
              <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-violet-500" 
                />
              </div>
              <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Backend Efficiency</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="animate-bounce text-muted-foreground" size={32} />
          </motion.div>
        </section>
      );
    };

    export default Hero;