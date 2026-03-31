import React from 'react';
    import { motion } from 'framer-motion';
    import { ExternalLink, Github, Layers } from 'lucide-react';

    const projects = [
      {
        title: "MedMinder",
        category: "Healthcare IoT",
        desc: "An IoT-integrated healthcare system featuring QR tracking, JWT authentication, and multilingual audio support for medication management.",
        tech: ["React", "Laravel", "IoT", "JWT"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
        color: "from-blue-500/20 to-cyan-500/20"
      },
      {
        title: "Scan Rewards",
        category: "Engagement Platform",
        desc: "A customer engagement system utilizing real-time APIs to reward users for interactions and purchases.",
        tech: ["Flutter", "Node.js", "Firebase"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        color: "from-violet-500/20 to-purple-500/20"
      },
      {
        title: "JISO Platform",
        category: "Community Hub",
        desc: "A robust community platform with a Laravel backend, featuring complex role-based access control and real-time notifications.",
        tech: ["Laravel", "MySQL", "Tailwind"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        color: "from-emerald-500/20 to-teal-500/20"
      }
    ];

    const Projects = () => {
      return (
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
                <p className="text-muted-foreground max-w-xl">A selection of projects that demonstrate my technical capabilities and problem-solving approach.</p>
              </div>
              <a href="#" className="flex items-center gap-2 text-violet-400 font-medium hover:underline">
                View all projects <Layers size={18} />
              </a>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                  </div>
                  
                  <div className="p-8">
                    <span className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded bg-white/10 border border-white/5 text-white/70">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Github size={20} />
                      </button>
                      <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Projects;