"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDownIcon, MagnifyingGlassIcon, RocketIcon, MagicWandIcon, FileTextIcon, LayersIcon, ReaderIcon } from '@radix-ui/react-icons';

type NavItem = { label: string; href?: string; children?: Array<{ label: string; href: string }>; };

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/#blog' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Products',
    children: [
      { label: 'Metadata Browser', href: '/products/metadata-browser' },
      { label: 'HTML To PDF Converter', href: '/products/html-to-pdf' },
      { label: 'Data Mask for Dataverse', href: '/products/data-mask' },
      { label: 'Commission 365', href: '/products/commission-365' },
      { label: 'AI Autocloser', href: '/products/ai-autocloser' },
      { label: 'Flow Monitor', href: '/products/flow-monitor' },
    ],
  },
  { label: 'Contact', href: '/#contact' },
];

const productCatalog = [
  {
    category: 'Data Tools',
    items: [
      { label: 'Metadata Browser', href: '/products/metadata-browser', icon: ReaderIcon },
      { label: 'Data Mask for Dataverse', href: '/products/data-mask', icon: LayersIcon },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { label: 'AI Autocloser', href: '/products/ai-autocloser', icon: MagicWandIcon },
    ],
  },
  {
    category: 'Business Tools',
    items: [
      { label: 'Commission 365', href: '/products/commission-365', icon: RocketIcon, badge: 'Popular' },
      { label: 'HTML To PDF Converter', href: '/products/html-to-pdf', icon: FileTextIcon },
      { label: 'Flow Monitor', href: '/products/flow-monitor', icon: RocketIcon },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on navigation/hash changes to avoid stale blur states or offset jumps
  useEffect(() => {
    const onRoute = () => setServicesOpen(false);
    window.addEventListener('hashchange', onRoute);
    window.addEventListener('popstate', onRoute);
    return () => {
      window.removeEventListener('hashchange', onRoute);
      window.removeEventListener('popstate', onRoute);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-mega-open', servicesOpen ? 'true' : 'false');
  }, [servicesOpen]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-overlay-1 border-b border-border-default bg-surface-0/70">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2 text-base font-semibold">
            <Image src="/image.png" alt="Pascalcase logo" width={28} height={28} className="w-7 h-7 rounded-md object-contain" />
            <span className="hidden sm:inline">Pascalcase</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1" ref={menuRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className="px-3 py-2 rounded-md text-sm hover:bg-overlay-1 transition-colors inline-flex items-center gap-1 text-text-primary"
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((o) => !o)}
                  >
                    {item.label}
                    <CaretDownIcon />
                  </button>
                ) : item.href ? (
                  <Link className="px-3 py-2 rounded-md text-sm hover:bg-overlay-1 transition-colors text-text-primary" href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <span className="px-3 py-2 rounded-md text-sm text-text-muted">
                    {item.label}
                  </span>
                )}
                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && servicesOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute left-0 mt-2 w-[720px] max-w-[90vw] rounded-2xl p-5 shadow-2xl border border-border-strong bg-white"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {productCatalog.map((group) => (
                          <div key={group.category}>
                            <h3 className="px-2 pb-2 text-xs font-bold uppercase tracking-wider text-text-primary/80">{group.category}</h3>
                            <ul className="space-y-2">
                              {group.items.map((p) => {
                                const Icon = p.icon;
                                return (
                                  <li key={p.label}>
                                    <a
                                      href={p.href}
                                      className="group flex items-start gap-3 rounded-xl px-3 py-3 bg-transparent hover:bg-surface-1 transition-colors text-text-primary"
                                      role="menuitem"
                                    >
                                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                                        <Icon className="h-4 w-4" aria-hidden />
                                      </span>
                                      <span className="flex min-w-0 flex-col">
                                        <span className="flex items-center gap-2 text-[15px] font-semibold">
                                          {p.label}
                                          {p.badge && (
                                            <span className="rounded-full bg-accent/90 px-2 py-0.5 text-[10px] font-semibold text-[color:var(--on-accent)]">
                                              {p.badge}
                                            </span>
                                          )}
                                        </span>
                                        <span className="text-sm text-text-primary/80 truncate">Click to learn more</span>
                                      </span>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex justify-end">
                        <Link href="/products" className="rounded-lg px-4 py-2 text-sm font-semibold bg-accent text-[color:var(--on-accent)] hover:opacity-90 transition-opacity">View All Products</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Center: Search (desktop) */}
          <div className="hidden md:flex items-center max-w-sm w-full">
            <div className="relative group w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" aria-hidden />
              <input
                aria-label="Search"
                placeholder="Search..."
                className="w-full bg-surface-input focus:bg-overlay-1 transition-colors pl-9 pr-9 py-2 rounded-md text-sm outline-none border border-border-subtle text-text-primary placeholder:text-text-secondary"
              />
              <button aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted text-xs">
                Esc
              </button>
            </div>
          </div>

          {/* Right: Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden px-3 py-2 rounded-md text-sm hover:bg-overlay-1"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1">
                <div className="px-3 pb-2">
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" aria-hidden />
                    <input
                      aria-label="Search"
                      placeholder="Search..."
                      className="w-full bg-surface-input focus:bg-overlay-1 transition-colors pl-9 pr-3 py-2 rounded-md text-sm outline-none border border-border-subtle text-text-primary placeholder:text-text-secondary"
                    />
                  </div>
                </div>
                {navItems.map((item) => (
                  <div key={item.label} className="px-2">
                    {item.children ? (
                      <details className="group">
                        <summary className="cursor-pointer px-3 py-2 rounded-md text-sm hover:bg-overlay-1 flex items-center justify-between">
                          <span>{item.label}</span>
                          <CaretDownIcon />
                        </summary>
                        <div className="pl-3">
                          {item.children.map((c) => (
                            <a key={c.label} className="block px-3 py-2 rounded-md text-sm hover:bg-overlay-1" href={c.href}>{c.label}</a>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <a className="block px-3 py-2 rounded-lg text-sm hover:bg-overlay-2 transition-colors" href={item.href}>{item.label}</a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}


