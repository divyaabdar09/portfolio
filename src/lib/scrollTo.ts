import type React from "react";

export const scrollToTarget = (href: string) => {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const id = href.replace(/^#/, "");
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const handleAnchorClick = (href: string, afterClick?: () => void) => {
  return (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTarget(href);
    afterClick?.();
  };
};
