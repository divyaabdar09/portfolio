import React from "react";
import { motion } from "framer-motion";
import { Award, BriefcaseBusiness, Calendar, GraduationCap, MapPin } from "lucide-react";
import { experienceHighlights } from "../data/portfolio";

const credentials = [
  {
    title: "Bachelor of Engineering in Computer Science",
    org: "Shivaji University, Kolhapur",
    meta: "2021 - 2025 | CGPA 8.64 / 10",
    icon: GraduationCap,
  },
  {
    title: "Industrial Training Programme in Java",
    org: "Sunbeam Pune",
    meta: "Java foundations and software concepts",
    icon: Award,
  },
  {
    title: "Internet of Things Certification",
    org: "IIT Bombay - E-Yantra",
    meta: "IoT systems and smart workflows",
    icon: Award,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="section-kicker justify-center">Experience</p>
          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            Professional work with production-facing systems.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="black-panel relative overflow-hidden rounded-[1.6rem] border border-white/10 p-7 backdrop-blur-xl"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                <BriefcaseBusiness size={26} />
              </span>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/56">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                  <Calendar size={15} />
                  July 2025 - Present
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
                  <MapPin size={15} />
                  Pune, India
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-black text-white">Junior Software Engineer</h3>
              <p className="mt-2 text-xl text-emerald-200">BlueSky Infotech</p>
              <p className="mt-5 leading-7 text-white/62">
                I work across web and application development, building frontend interfaces,
                Laravel backend services, REST APIs, databases, authentication flows, CMS
                functionality, dashboards, Firebase services, and Flutter app features.
              </p>
            </div>
          </motion.article>

          <div className="relative rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4">
            <div className="absolute bottom-8 left-10 top-8 w-px bg-gradient-to-b from-emerald-300 via-cyan-300 to-transparent" />
            <div className="space-y-4">
              {experienceHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="black-panel relative ml-11 rounded-2xl border border-white/10 p-5 backdrop-blur-xl"
                >
                  <span className="absolute -left-[3.2rem] top-6 grid h-7 w-7 place-items-center rounded-full border border-emerald-200/30 bg-black text-xs font-black text-emerald-200">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-white/68">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={23} />
                </span>
                <h4 className="mt-5 text-lg font-black text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-white/58">{item.org}</p>
                <p className="mt-4 text-xs font-semibold uppercase text-emerald-200/80">
                  {item.meta}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
