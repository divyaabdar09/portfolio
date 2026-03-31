import React from 'react';
    import { motion } from 'framer-motion';
    import { Code2, Cpu, Globe, ShieldCheck } from 'lucide-react';

    const features = [
      {
        icon: <Code2 className="text-violet-400" />,
        title: "Full-Stack Mastery",
        desc: "Expertise in Laravel, Flutter, and React for end-to-end delivery."
      },
      {
        icon: <Cpu className="text-blue-400" />,
        title: "Scalable Backend",
        desc: "Designing robust APIs and optimized database architectures."
      },
      {
        icon: <ShieldCheck className="text-emerald-400" />,
        title: "Secure Systems",
        desc: "Implementing JWT, OAuth, and role-based access controls."
      },
      {
        icon: <Globe className="text-orange-400" />,
        title: "Performance First",
        desc: "Optimizing load times and system responsiveness."
      }
    ];

    const About = () => {
      return (
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Crafting Digital <br />
                  <span className="text-violet-400">Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a Junior Software Engineer with a deep passion for building scalable backend systems and intuitive user interfaces. My journey is fueled by a commitment to performance optimization and secure authentication.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                        {f.icon}
                      </div>
                      <h3 className="font-bold mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
                <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center p-12">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          opacity: [0.2, 0.5, 0.2],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                        className="aspect-square rounded-xl bg-white/5 border border-white/10"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl font-bold text-white/20 font-mono">0101</span>
                      <p className="text-xs font-mono text-violet-400 mt-2 tracking-widest uppercase">Core Logic</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default About;