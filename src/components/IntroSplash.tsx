import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INTRO_KEY = "divya-portfolio-intro-seen";
const TITLE_LETTERS = "PORTFOLIO".split("");

const WaveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let time = 0;
    let scrollMomentum = 0;
    let lastTouchY: number | null = null;
    const pointer = { x: 0, y: 0, active: false };

    const resize = () => {
      const host = canvas.parentElement;
      if (!host) return;
      const bounds = host.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(bounds.width, 1);
      height = Math.max(bounds.height, 1);
      pointer.x = pointer.active ? pointer.x : width / 2;
      pointer.y = pointer.active ? pointer.y : height / 2;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const addScrollEnergy = (amount: number, x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
      scrollMomentum = Math.min(scrollMomentum + Math.abs(amount) * 0.0007, 0.16);
    };

    const handleWheel = (event: WheelEvent) => {
      const bounds = canvas.getBoundingClientRect();
      addScrollEnergy(
        event.deltaY,
        event.clientX ? event.clientX - bounds.left : width / 2,
        event.clientY ? event.clientY - bounds.top : height / 2,
      );
    };
    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? null;
    };
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      const delta = lastTouchY === null ? 0 : lastTouchY - touch.clientY;
      lastTouchY = touch.clientY;
      const bounds = canvas.getBoundingClientRect();
      addScrollEnergy(delta, touch.clientX - bounds.left, touch.clientY - bounds.top);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      if (scrollMomentum > 0.0002) {
        time += scrollMomentum;
        scrollMomentum *= 0.92;
      }

      const centerY = height * 0.48;
      const influenceWidth = Math.max(width * 0.18, 180);

      for (let layer = 0; layer < 7; layer += 1) {
        context.beginPath();
        const layerOffset = (layer - 3) * 22;
        const amplitude = 14 + layer * 2.8;

        for (let x = -20; x <= width + 20; x += 8) {
          const distance = x - pointer.x;
          const pointerLift = pointer.active
            ? Math.exp(-(distance * distance) / (2 * influenceWidth * influenceWidth)) *
              Math.sin(time * 4.2 + distance * 0.018) *
              30
            : 0;
          const y =
            centerY +
            layerOffset +
            Math.sin(x * 0.009 + time * (1.1 + layer * 0.08) + layer * 0.8) * amplitude +
            Math.cos(x * 0.004 - time * 1.4 + layer) * 8 +
            pointerLift;

          if (x === -20) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "rgba(16, 185, 129, 0)");
        gradient.addColorStop(0.22, `rgba(52, 211, 153, ${0.16 + layer * 0.035})`);
        gradient.addColorStop(0.5, "rgba(167, 243, 208, 0.78)");
        gradient.addColorStop(0.78, `rgba(45, 212, 191, ${0.2 + layer * 0.025})`);
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
        context.strokeStyle = gradient;
        context.lineWidth = layer === 3 ? 1.7 : 1;
        context.stroke();
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
    window.addEventListener("resize", resize);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
};

const createWavePath = (layer: number, progress: number) => {
  const baseline = 82 + layer * 14;
  const amplitude = 10 + layer * 1.8;
  const phase = progress * 260 + layer * 42;
  let path = `M -120 ${baseline}`;

  for (let x = -120; x <= 1320; x += 18) {
    const y =
      baseline +
      Math.sin((x + phase) * 0.018) * amplitude +
      Math.cos((x - phase * 0.55) * 0.009) * 5;
    path += ` L ${x} ${y}`;
  }

  return path;
};

const LetterWaves = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 1200 240"
    preserveAspectRatio="none"
    className="h-full w-full drop-shadow-[0_0_16px_rgba(110,231,183,0.45)]"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="portfolio-letter-clip">
        <text
          x="600"
          y="185"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="168"
          fontWeight="900"
          letterSpacing="4"
        >
          PORTFOLIO
        </text>
      </clipPath>
      <linearGradient id="letter-water-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#34d399" stopOpacity="0.08" />
        <stop offset="48%" stopColor="#10b981" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#022c22" stopOpacity="0.82" />
      </linearGradient>
      <linearGradient id="letter-wave-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#d1fae5" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.32" />
      </linearGradient>
    </defs>

    <g clipPath="url(#portfolio-letter-clip)">
      <rect width="1200" height="240" fill="url(#letter-water-fill)" />
      {Array.from({ length: 8 }, (_, layer) => (
        <motion.path
          key={layer}
          d={createWavePath(layer, progress)}
          fill="none"
          stroke="url(#letter-wave-line)"
          strokeWidth={layer === 4 ? 3 : 1.6}
          strokeLinecap="round"
          animate={{
            x: layer % 2 === 0 ? [0, -72, 0] : [0, 64, 0],
            y: [0, layer % 2 === 0 ? -3 : 3, 0],
            opacity: [
              0.38 + progress * 0.28,
              0.72 + progress * 0.24,
              0.38 + progress * 0.28,
            ],
          }}
          transition={{
            duration: 3.8 + layer * 0.34,
            repeat: Infinity,
            ease: "easeInOut",
            delay: layer * -0.42,
          }}
        />
      ))}
    </g>
    <text
      x="600"
      y="185"
      textAnchor="middle"
      fontFamily="Inter, sans-serif"
      fontSize="168"
      fontWeight="900"
      letterSpacing="4"
      fill="transparent"
      stroke="#6ee7b7"
      strokeWidth="2.2"
      opacity="0.96"
    >
      PORTFOLIO
    </text>
  </svg>
);

const IntroSplash = () => {
  const [visible, setVisible] = useState(() => {
    try {
      return window.sessionStorage.getItem(INTRO_KEY) !== "true";
    } catch {
      return true;
    }
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    let accumulatedScroll = 0;
    let lastTouchY: number | null = null;

    const finishIntro = () => {
      try {
        window.sessionStorage.setItem(INTRO_KEY, "true");
      } catch {
        // The intro still exits normally when storage is unavailable.
      }
      setVisible(false);
    };

    const advance = (amount: number) => {
      if (amount <= 0) return;
      accumulatedScroll = Math.min(accumulatedScroll + amount, 320);
      setScrollProgress(accumulatedScroll / 320);
      if (accumulatedScroll >= 320) finishIntro();
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      advance(Math.max(0, event.deltaY));
    };
    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? null;
    };
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      event.preventDefault();
      const delta = lastTouchY === null ? 0 : lastTouchY - touch.clientY;
      lastTouchY = touch.clientY;
      advance(Math.max(0, delta));
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " ", "Enter"].includes(event.key)) {
        event.preventDefault();
        advance(event.key === "Enter" ? 320 : 120);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(14px)", scale: 1.035 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-black"
          aria-label="Divya Abdar portfolio introduction"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(16,185,129,0.14),transparent_36%),linear-gradient(135deg,#000,rgba(1,18,13,0.92),#000)]" />
          <div className="pointer-events-none absolute inset-3 rounded-[1.4rem] border border-emerald-300/40 shadow-[inset_0_0_34px_rgba(52,211,153,0.07),0_0_28px_rgba(16,185,129,0.08)] sm:inset-5 sm:rounded-[2rem]" />

          <div className="relative z-10 px-5 text-center">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.45em" }}
              animate={{ opacity: 0.58, letterSpacing: "0.28em" }}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="mb-4 text-[10px] font-bold uppercase text-emerald-100/60 sm:text-xs"
            >
              Creative developer portfolio
            </motion.p>

            <div className="relative mx-auto h-[clamp(4.3rem,14vw,12rem)] w-[min(94vw,1200px)]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                className="absolute inset-0 z-0"
              >
                <LetterWaves progress={scrollProgress} />
              </motion.div>

              <motion.h1
                aria-label="PORTFOLIO"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0] }}
                transition={{ duration: 1.9, times: [0, 0.72, 1], ease: "easeOut" }}
                className="intro-outline-text absolute inset-0 z-10 flex items-center justify-center overflow-visible text-[clamp(3.2rem,14vw,12rem)] font-black leading-none tracking-[0.04em]"
              >
                {TITLE_LETTERS.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    aria-hidden="true"
                    initial={{
                      opacity: 0,
                      y: index % 2 === 0 ? -130 : 130,
                      scale: 0.45,
                      rotateX: index % 2 === 0 ? -65 : 65,
                    }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                      mass: 0.72,
                      delay: 0.12 + index * 0.075,
                    }}
                    className="inline-block origin-center"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="intro-signature mt-5 text-[clamp(2.7rem,7vw,6.5rem)] leading-none text-white"
            >
              Divya Abdar
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.05 }}
              className="mx-auto mt-7 h-px w-36 origin-center bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 z-20 w-44 -translate-x-1/2 text-center sm:bottom-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/48">
              Scroll to enter
            </p>
            <div className="h-px overflow-hidden bg-white/10">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-emerald-500 to-emerald-200"
                animate={{ scaleX: scrollProgress }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
