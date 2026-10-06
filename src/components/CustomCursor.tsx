import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 900, damping: 40 });
  const dotY = useSpring(cursorY, { stiffness: 900, damping: 40 });
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 22 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsActive(Boolean(target?.closest("a, button, input, textarea, select, [data-cursor='active']")));
    };

    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] hidden md:block">
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(38,38,38,0.84)_0%,rgba(16,95,74,0.48)_22%,rgba(15,67,80,0.32)_48%,rgba(76,29,89,0.22)_68%,rgba(0,0,0,0.06)_84%,transparent_100%)] blur-2xl"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: isVisible ? 0.82 : 0,
          width: isActive ? 132 : 96,
          height: isActive ? 132 : 96,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.58)]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isActive ? 0.7 : 1 }}
      />
    </div>
  );
};

export default CustomCursor;
