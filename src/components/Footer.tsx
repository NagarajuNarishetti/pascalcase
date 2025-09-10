"use client";
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-8 md:py-12"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Keep in Touch */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Keep in Touch</h3>
              <p className="text-sm text-text-muted">Connect with us across platforms</p>
              <div className="flex items-center gap-3 pt-1">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/company/pascalcase" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-text-primary hover:bg-surface-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.485 0-3.5 1.343-3.5 2.286V21h-4V9h4v1.714S12 9 14.5 9C18 9 21 11.5 21 16v5h-4v-5c0-2.5-1.5-3-2.5-3z" /></svg>
                </a>
                <a aria-label="Twitter" href="https://twitter.com/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-text-primary hover:bg-surface-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.36 8.53 8.53 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.88 12.09 12.09 0 0 1-8.77-4.45 4.26 4.26 0 0 0 1.32 5.68 4.22 4.22 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.06 12.06 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.13 0-.18-.01-.35-.02-.53A8.66 8.66 0 0 0 22.46 6z" /></svg>
                </a>
                <a aria-label="Facebook" href="https://facebook.com/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-text-primary hover:bg-surface-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H8.4v-2.91h2.04V9.41c0-2.02 1.2-3.14 3.03-3.14.88 0 1.8.16 1.8.16v1.98h-1.01c-.99 0-1.3.62-1.3 1.25v1.5h2.21l-.35 2.91h-1.86V22c4.78-.77 8.44-4.93 8.44-9.94z" /></svg>
                </a>
                <a aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-default text-text-primary hover:bg-surface-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z" /></svg>
                </a>
              </div>
            </div>

            {/* Pages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Pages</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  <li>
                    <motion.a
                      href="/blog"
                      whileHover={{ x: 4 }}
                      className="group relative text-sm text-text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="relative">
                        Blog
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="/careers"
                      whileHover={{ x: 4 }}
                      className="group relative text-sm text-text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="relative">
                        Careers
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="/terms"
                      whileHover={{ x: 4 }}
                      className="group relative text-sm text-text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="relative">
                        Terms of Service
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="/privacy"
                      whileHover={{ x: 4 }}
                      className="group relative text-sm text-text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="relative">
                        Privacy Policy
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </motion.a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* About */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-text-primary">About</h3>
              <div className="space-y-3">
                <a
                  href="mailto:support@pascalcase.com"
                  className="block text-sm text-accent transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  support@pascalcase.com
                </a>
                <p className="text-sm leading-relaxed text-text-muted">
                  At Pascalcase, we share Microsoft&apos;s vision of helping you and your organization realize full potential. We specialize in building tools based on Dynamics 365 and the Power Platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright Bar */}
        <div className="border-t border-border-subtle py-6">
          <p className="text-center text-xs text-text-muted">
            ©2025 Pascalcase Software Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}