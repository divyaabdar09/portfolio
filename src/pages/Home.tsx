import React, { useEffect, useState } from 'react';
    import { motion, useScroll, useSpring } from 'framer-motion';
    import Navbar from '../components/Navbar';
    import Hero from '../components/Hero';
    import About from '../components/About';
    import Skills from '../components/Skills';
    import Experience from '../components/Experience';
    import Projects from '../components/Projects';
    import Contact from '../components/Contact';
    import Footer from '../components/Footer';

    export default function Home() {
      const { scrollYProgress } = useScroll();
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
      }, []);

      if (isLoading) {
        return (
          <div className="fixed inset-0 bg-background flex items-center justify-center z-[100]">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold tracking-tighter font-serif"
              >
                DA<span className="text-violet-500">.</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 h-0.5 bg-violet-500"
              />
            </div>
          </div>
        );
      }

      return (
        <div className="bg-background text-foreground selection:bg-violet-500/30">
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-violet-500 origin-left z-[60]"
            style={{ scaleX }}
          />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      );
    }