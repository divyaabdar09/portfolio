import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

const marqueeSkills = [
  "Laravel",
  "React",
  "Flutter",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "CMS",
  "Admin Panels",
  "JavaScript",
  "PHP",
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-kicker justify-center">Technical Skills</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            A practical stack for shipping real products.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Frontend, backend, mobile, database, authentication, Firebase, APIs, and tooling
            all come together in the work.
          </p>
        </div>

        <div className="marquee black-panel mb-12 overflow-hidden rounded-2xl border border-white/10 py-4">
          <motion.div
            className="flex min-w-max gap-3 px-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/70"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              className="black-panel group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 p-6 backdrop-blur-xl"
            >
              <div className="absolute right-4 top-4 text-5xl font-black text-white/[0.035]">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300 opacity-60" />
              <h3 className="relative text-xl font-black text-white">{group.title}</h3>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/8 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-white/68 transition-colors group-hover:border-white/14 group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
