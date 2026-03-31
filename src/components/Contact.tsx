import React from 'react';
    import { motion } from 'framer-motion';
    import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

    const Contact = () => {
      return (
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold mb-6">Let's Build Something <span className="text-violet-400">Great</span></h2>
                  <p className="text-muted-foreground mb-12 text-lg">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Email Me</p>
                        <a href="mailto:divyaabdar98@gmail.com" className="text-xl font-medium hover:text-violet-400 transition-colors">divyaabdar98@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">Location</p>
                        <p className="text-xl font-medium">Pune, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-12">
                    {[
                      { icon: <Github size={20} />, href: "#" },
                      { icon: <Linkedin size={20} />, href: "#" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;