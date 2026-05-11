"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200/80 bg-white/95 text-lg text-violet-700 shadow-lg shadow-violet-500/15 backdrop-blur-md transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
