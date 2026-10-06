import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolio";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="black-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-7 backdrop-blur-xl md:p-10 lg:p-12"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-300/10 blur-3xl" />
          <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
                Let's build something useful, reliable, and easy to maintain.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
                I am open to Software Development opportunities in Pune and across India,
                especially roles involving web development, backend systems, APIs, mobile
                integration, CMS, and automation-focused workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-1"
                >
                  Email Me
                  <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.linkedin}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/12"
                >
                  LinkedIn
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: MapPin, label: "Location", value: `${profile.location}, India` },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/divya-abdar-ab896a249", href: profile.linkedin },
                { icon: Github, label: "GitHub", value: "github.com", href: profile.github },
              ].map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200 transition-transform group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase text-white/38">{item.label}</span>
                      <span className="mt-1 block break-words text-sm font-semibold text-white/72 sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </motion.div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
