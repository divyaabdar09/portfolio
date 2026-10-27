import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Layers3 } from "lucide-react";
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
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              id={`project-${project.slug}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              data-cursor="active"
              className="group scroll-mt-28 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#050505]/90 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase text-emerald-200/90">{project.category}</p>
                  <h3 className="mt-1.5 text-2xl font-black text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-white/62">{project.desc}</p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {project.highlights.slice(0, 4).map((item) => (
                    <span key={item} className="flex items-center gap-2 text-xs text-white/64">
                      <CheckCircle2 size={14} className="shrink-0 text-emerald-300" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[11px] font-semibold text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.slug === "medminder" && (
                  <p className="mt-4 border-t border-white/10 pt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/38">
                    © MedMinder — Copyrighted project. All rights reserved.
                  </p>
                )}

                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="active"
                        className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-3 py-2 text-xs font-bold text-emerald-100 transition-colors hover:border-emerald-200/60 hover:bg-emerald-300/15"
                      >
                        {link.label}
                        <ExternalLink size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
