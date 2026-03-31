import React from 'react';
    import { motion } from 'framer-motion';
    import { Briefcase, Calendar, MapPin } from 'lucide-react';

    const Experience = () => {
      return (
        <section id="experience" className="py-24 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent -translate-x-1/2 hidden md:block" />

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 md:w-1/2 md:pr-12 md:ml-0 ml-8"
              >
                {/* Node */}
                <div className="absolute left-[-33px] md:left-auto md:right-[-9px] top-0 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10" />
                
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-2 text-violet-400 text-sm font-mono mb-4">
                    <Calendar size={14} /> 2025 — Present
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Junior Software Engineer</h3>
                  <p className="text-lg text-foreground/80 mb-4">BlueSky Infotech</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                    <MapPin size={14} /> Mumbai, India
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-violet-500">•</span>
                      Building scalable applications with Laravel and React.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-500">•</span>
                      Developing and documenting robust REST APIs.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-500">•</span>
                      Optimizing database queries and schema designs.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-500">•</span>
                      Implementing secure JWT-based authentication systems.
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Education Section */}
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-12 text-center">Education & Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "BE Computer Science",
                      org: "Shivaji University",
                      meta: "CGPA: 8.64",
                      icon: <Briefcase size={20} />
                    },
                    {
                      title: "Java Training",
                      org: "Sunbeam Pune",
                      meta: "Advanced Concepts",
                      icon: <Briefcase size={20} />
                    },
                    {
                      title: "IoT Certification",
                      org: "IIT Bombay",
                      meta: "Smart Systems",
                      icon: <Briefcase size={20} />
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center group hover:border-violet-500/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4 text-violet-400 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
                      <span className="text-xs font-mono text-violet-400/80">{item.meta}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Experience;