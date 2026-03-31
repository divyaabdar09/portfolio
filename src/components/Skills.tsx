import React from 'react';
    import { motion } from 'framer-motion';

    const skillCategories = [
      {
        title: "Languages",
        skills: ["Java", "PHP", "JavaScript", "SQL", "TypeScript"]
      },
      {
        title: "Technologies",
        skills: ["Laravel", "ReactJS", "Flutter", "React Native", "Node.js"]
      },
      {
        title: "Tools & DB",
        skills: ["Git", "GitHub", "Figma", "MySQL", "PostgreSQL", "Docker"]
      },
      {
        title: "Core Concepts",
        skills: ["REST APIs", "Auth Systems", "Microservices", "UI/UX Design"]
      }
    ];

    const Skills = () => {
      return (
        <section id="skills" className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
              <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                  <div className="relative p-8 rounded-2xl border border-white/10 bg-background h-full">
                    <h3 className="text-xl font-bold mb-6 text-violet-400">{cat.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-sm text-foreground/80 hover:text-white hover:bg-white/10 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Skills;