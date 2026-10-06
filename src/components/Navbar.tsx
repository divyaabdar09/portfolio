import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scrollTo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-black/82 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <motion.a
          href="#"
          onClick={handleAnchorClick("#")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-3"
          aria-label="Divya Abdar portfolio home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-transform group-hover:rotate-6">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-white/90 sm:block">
            {profile.name}
          </span>
        </motion.a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl md:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={handleAnchorClick(link.href)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/62 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href={profile.hireMailto}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-bold text-black shadow-[0_0_32px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Hire Me
        </motion.a>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/10 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 p-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleAnchorClick(link.href, () => setIsMobileMenuOpen(false))}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-white/75 hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={profile.hireMailto}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-base font-bold text-black"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
