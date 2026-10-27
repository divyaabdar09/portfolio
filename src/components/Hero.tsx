import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scrollTo";

const portraitImage = `${import.meta.env.BASE_URL}images/divya-professional.png`;

const Hero = () => {
  const frameRotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const frameRotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const portraitX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const portraitY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const sparkleX = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });
  const sparkleY = useSpring(useMotionValue(0), { stiffness: 90, damping: 20 });

  const handlePortraitMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    frameRotateX.set(y * -9);
    frameRotateY.set(x * 11);
    portraitX.set(x * 28);
    portraitY.set(y * 18);
    sparkleX.set(x * -16);
    sparkleY.set(y * -12);
  };

  const resetPortrait = () => {
    frameRotateX.set(0);
    frameRotateY.set(0);
    portraitX.set(0);
    portraitY.set(0);
    sparkleX.set(0);
    sparkleY.set(0);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="hero-mesh absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr]">
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
            className="max-w-3xl text-4xl font-black leading-[0.98] tracking-normal text-white sm:text-5xl md:text-6xl xl:text-7xl"
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
          className="relative mx-auto h-[450px] w-full max-w-[430px] sm:h-[560px]"
          style={{ perspective: 1200 }}
          onMouseMove={handlePortraitMove}
          onMouseLeave={resetPortrait}
        >
          <div className="absolute inset-x-5 bottom-8 top-16 rounded-[45%_45%_2rem_2rem] bg-gradient-to-b from-emerald-500/30 via-emerald-300/15 to-cyan-200/10 blur-3xl" />

          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            className="absolute inset-x-6 bottom-10 top-20 rounded-[48%_48%_2rem_2rem] border border-emerald-100/20 bg-[radial-gradient(circle_at_50%_26%,rgba(110,231,183,0.22),transparent_40%),linear-gradient(180deg,rgba(6,78,59,0.38),rgba(4,20,17,0.76)_58%,rgba(0,0,0,0.95))] shadow-[inset_0_0_70px_rgba(110,231,183,0.08),0_35px_100px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            style={{
              rotateX: frameRotateX,
              rotateY: frameRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 z-10 overflow-hidden rounded-[inherit]">
              <div className="absolute inset-5 rounded-[48%_48%_1.5rem_1.5rem] border border-emerald-200/15" />
              <div className="absolute inset-x-8 top-1/3 h-px bg-gradient-to-r from-transparent via-emerald-200/45 to-transparent" />
              <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent" />

              <motion.div className="absolute inset-0" style={{ x: sparkleX, y: sparkleY }}>
                {[
                  ["16%", "25%", 0],
                  ["76%", "20%", 0.7],
                  ["24%", "48%", 1.3],
                  ["82%", "52%", 1.9],
                  ["12%", "68%", 2.5],
                  ["71%", "72%", 3.1],
                ].map(([left, top, delay], index) => (
                  <motion.span
                    key={`${left}-${top}`}
                    className="absolute text-sm text-emerald-200 drop-shadow-[0_0_9px_rgba(110,231,183,0.95)]"
                    style={{ left, top }}
                    animate={{ opacity: [0.18, 1, 0.18], scale: [0.7, 1.25, 0.7], rotate: [0, 45, 90] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: Number(delay) }}
                  >
                    {index % 2 === 0 ? "✦" : "·"}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="absolute inset-0 z-20 flex items-end justify-center"
              style={{
                x: portraitX,
                y: portraitY,
                clipPath: "inset(-45% -25% 0 -25%)",
              }}
            >
              <motion.img
                src={portraitImage}
                alt="Divya Abdar"
                className="h-[132%] w-auto max-w-none object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.7)] sm:h-[138%]"
                initial={{ y: 100, opacity: 0, scale: 0.96 }}
                animate={{ y: [88, 78, 88], opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.75, delay: 0.3 },
                  scale: { duration: 0.75, delay: 0.3 },
                  y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                }}
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[inherit]">
              <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.99)_28%,rgba(1,24,18,0.9)_55%,rgba(1,36,27,0.42)_74%,transparent_100%)]" />
              <div className="absolute bottom-0 left-1/2 h-24 w-3/4 -translate-x-1/2 bg-emerald-950/35 blur-3xl" />
            </div>
          </motion.div>

          <div className="absolute left-0 top-24 z-30 rounded-full border border-white/12 bg-black/75 px-4 py-2 text-xs font-bold text-white/75 shadow-xl backdrop-blur-xl">
            Full-stack developer
          </div>
          <div className="absolute bottom-20 right-0 z-30 rounded-full border border-cyan-200/20 bg-black/75 px-4 py-2 text-xs font-bold text-cyan-100 shadow-xl backdrop-blur-xl">
            Web · Mobile · APIs
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
