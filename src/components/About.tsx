import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { approach, focusAreas, services } from "../data/portfolio";

type Service = (typeof services)[number];

const ServiceCard = ({ item, index }: { item: Service; index: number }) => {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const Icon = item.icon;

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateX.set(y * -12);
    rotateY.set(x * 12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true, margin: "-60px" }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      whileHover={{ y: -8, scale: 1.015 }}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      data-cursor="active"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(110,231,183,0.14),transparent_42%,rgba(103,232,249,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative" style={{ transform: "translateZ(28px)" }}>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-emerald-300 transition-transform group-hover:rotate-6 group-hover:scale-110">
            <Icon size={22} />
          </div>
          <h3 className="text-lg font-bold leading-tight text-white">{item.title}</h3>
        </div>
        <p className="mt-4 text-sm leading-6 text-white/58">{item.desc}</p>
      </div>
    </motion.article>
  );
};

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

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
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

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="black-panel mt-14 rounded-2xl border border-white/10 p-6 backdrop-blur-xl md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-white">My Development Approach</h3>
            <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200 sm:block">
              practical and maintainable
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {approach.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.025 }}
                data-cursor="active"
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.045] p-4 transition-colors hover:border-emerald-200/30 hover:bg-emerald-300/[0.07]"
              >
                <div className="pointer-events-none absolute inset-y-0 -left-full w-2/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-emerald-200/10 to-transparent transition-transform duration-500 group-hover:translate-x-[340%]" />
                <div className="relative flex items-center gap-3">
                  <p className="shrink-0 font-mono text-sm font-bold text-emerald-300/90">
                    0{index + 1}
                  </p>
                  <span className="h-5 w-px bg-white/12 transition-colors group-hover:bg-emerald-200/40" />
                  <p className="font-bold text-white">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
