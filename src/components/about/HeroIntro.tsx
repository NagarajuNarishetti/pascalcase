"use client";
import { motion } from 'framer-motion';

export default function HeroIntro() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <div className="relative p-0 sm:p-0">
        <div className="relative px-0">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -6, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.45)]"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 2.4 1.178 4.515 3 5.8V17c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2.2c1.822-1.285 3-3.4 3-5.8 0-3.866-3.134-7-7-7zm2.5 12.1l-.5.35V16h-4v-1.55l-.5-.35C8.3 13.02 7.5 11.57 7.5 10c0-2.485 2.015-4.5 4.5-4.5S16.5 7.515 16.5 10c0 1.57-.8 3.02-2 4.1z" />
                <rect x="9" y="19" width="6" height="1" rx="0.5" />
                <rect x="10" y="21" width="4" height="1" rx="0.5" />
              </svg>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold">Why Pascalcase?</h1>
          </div>
          <p className="mt-3 text-text-muted">Trusted Dynamics 365 & Power Platform Experts.We are ex-Microsoft employees. We have unparalleled product knowledge.</p>
        </div>
      </div>
    </section>
  );
}


