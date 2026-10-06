import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Layers3 } from "lucide-react";
import { projects } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scrollTo";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Featured Projects</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              Project work with APIs, admin systems, mobile features, and data flows.
            </h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/65">
            <Layers3 size={18} className="text-cyan-200" />
            {projects.length} highlighted builds
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.route}
              onClick={handleAnchorClick(project.route)}
              className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold text-white/58 transition-colors hover:border-emerald-200/40 hover:bg-white/10 hover:text-white"
            >
              {project.title}
            </a>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              id={`project-${project.slug}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              data-cursor="active"
              className="group scroll-mt-28 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#050505]/90 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl"
            >
              <a
                href={project.route}
                onClick={handleAnchorClick(project.route)}
                className="block"
                aria-label={`Focus ${project.title} project`}
              >
              <div className="relative aspect-[16/8.5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-bold uppercase text-emerald-200/90">{project.category}</p>
                  <h3 className="mt-2 text-3xl font-black text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-white/62">{project.desc}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-white/64">
                      <CheckCircle2 size={16} className="text-emerald-300" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs font-semibold text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
