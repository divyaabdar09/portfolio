import React from 'react';

    const Footer = () => {
      return (
        <footer className="py-12 border-t border-white/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent font-serif mb-2">
                DA.
              </p>
              <p className="text-sm text-muted-foreground">
                Building the future of digital experiences.
              </p>
            </div>
            
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2026 Divya Abdar. All rights reserved.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;