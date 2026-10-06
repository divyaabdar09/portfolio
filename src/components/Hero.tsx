import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile, stats } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scrollTo";

const codeLines = [
  "const stack = ['Laravel', 'React', 'Flutter'];",
  "await api.secure().validate().ship();",
  "notify.users({ channel: 'FCM' });",
  "dashboard.render(dynamicContent);",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="hero-mesh absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <motion.div
        className="absolute left-[8%] top-28 hidden h-28 w-28 rounded-full border border-emerald-300/25 lg:block"
        animate={{ y: [0, 18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-28 right-[12%] hidden h-20 w-20 rounded-[1.4rem] border border-cyan-300/25 bg-cyan-300/5 lg:block"
        animate={{ y: [0, -16, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/72 backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-emerald-300" />
            Available for Software Development opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            {profile.name}
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
              builds reliable digital systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={handleAnchorClick("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black shadow-[0_18px_45px_rgba(255,255,255,0.18)] transition-transform hover:-translate-y-1"
            >
              View Projects
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-colors hover:bg-white/12"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/55"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-emerald-300" />
              {profile.location}, India
            </span>
            <a className="inline-flex items-center gap-2 hover:text-white" href={profile.linkedin}>
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={profile.github}>
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-fuchsia-400/20 blur-3xl" />
          <div className="black-panel relative overflow-hidden rounded-[1.75rem] border border-white/12 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="text-xs font-mono text-white/40">portfolio.pipeline.ts</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + index * 0.18 }}
                  className="rounded-xl border border-white/8 bg-white/[0.045] px-4 py-3 text-white/72"
                >
                  <span className="mr-4 text-emerald-300/80">0{index + 1}</span>
                  {line}
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 + index * 0.08 }}
                  className="border-white/10 p-5 md:border-r last:border-r-0"
                >
                  <p className="text-xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/45">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={handleAnchorClick("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.1 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-6 left-1/2 z-20 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/60 backdrop-blur-xl"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
