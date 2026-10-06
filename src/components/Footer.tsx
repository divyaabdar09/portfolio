import React from "react";
import { navLinks, profile } from "../data/portfolio";
import { handleAnchorClick } from "../lib/scrollTo";

const Footer = () => {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center md:flex-row md:px-8 md:text-left">
        <div>
          <p className="text-2xl font-black text-white">{profile.initials}.</p>
          <p className="mt-1 text-sm text-white/45">Full-stack development, APIs, mobile, CMS, and automation.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm font-medium text-white/48">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleAnchorClick(link.href)} className="hover:text-white">
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-sm text-white/42">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
