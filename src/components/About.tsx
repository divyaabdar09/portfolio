import React from "react";
import { motion } from "framer-motion";
import { approach, focusAreas, services } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-kicker">About Me</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              From UI details to backend logic, I like owning the full flow.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/64">
              I am a Computer Science Engineer and Junior Software Engineer at BlueSky Infotech.
              My development journey started with frontend and UI work, then expanded into REST
              APIs, Laravel systems, database management, authentication, mobile applications,
              notifications, CMS platforms, and administrative dashboards.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true, margin: "-60px" }}
                    whileHover={{ y: -8 }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                  >
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/10 text-emerald-300 transition-transform group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/58">{item.desc}</p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="black-panel rounded-2xl border border-white/10 p-6 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-white">My Development Approach</h3>
                <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200 sm:block">
                  practical and maintainable
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {approach.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-white/8 bg-white/[0.045] p-4"
                  >
                    <p className="text-xs font-mono text-emerald-300/80">0{index + 1}</p>
                    <p className="mt-2 font-bold text-white">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={21} />
                </span>
                <span>
                  <span className="block font-bold text-white">{area.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-white/55">{area.detail}</span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
