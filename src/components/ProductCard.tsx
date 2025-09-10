"use client";
import { useState } from 'react';
import { DotsHorizontalIcon, FileTextIcon, PlayIcon, GitHubLogoIcon, DownloadIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';

type Tag = 'Free' | 'AppSource' | 'Edge' | 'Popular';

export type Product = {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: Tag[];
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const track = (action: string) => {
    // Simple analytics hook placeholder
    console.log("product_cta_click", { slug: product.slug, action });
  };

  return (
    <div className="group relative rounded-2xl border border-border-default bg-surface-card p-4 backdrop-blur-md transition hover:bg-overlay-1">
      {product.badge && (
        <span className="absolute -top-2 left-3 rounded-full bg-accent/90 px-2 py-0.5 text-[10px] font-semibold text-[color:var(--on-accent)] shadow">
          {product.badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-overlay-2 text-text-primary shrink-0">
          {product.icon ?? <span className="text-xs">APP</span>}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold truncate">{product.title}</h3>
            <div className="relative">
              <button
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className="rounded-md p-1 hover:bg-overlay-1"
                aria-label="More options"
                title="More options"
              >
                <DotsHorizontalIcon />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 z-10 mt-2 min-w-44 rounded-lg border border-border-default bg-surface-popover p-2 text-sm backdrop-blur-md"
                  >
                    <a className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-overlay-1" href={`/products/${product.slug}`} onClick={() => track('menu_docs')}>
                      <FileTextIcon /> View docs
                    </a>
                    <a className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-overlay-1" href="#" onClick={() => track('menu_demo')}>
                      <PlayIcon /> Demo
                    </a>
                    <a className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-overlay-1" href="#" onClick={() => track('menu_github')}>
                      <GitHubLogoIcon /> GitHub
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <p className="mt-1 line-clamp-2 text-xs text-text-muted">{product.description}</p>
          {product.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="rounded-full border border-border-subtle px-2 py-0.5 text-[10px] text-text-muted">{t}</span>
              ))}
            </div>
          )}
          <div className="mt-3 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-xs font-medium text-[color:var(--on-accent)] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              onClick={() => track('download')}
            >
              <DownloadIcon /> Download
            </motion.button>
            <a href={`/products/${product.slug}`} className="rounded-md border border-border-default px-3 py-2 text-xs hover:bg-overlay-1" onClick={() => track('docs')}>Docs</a>
            <a href="#" className="rounded-md border border-border-default px-3 py-2 text-xs hover:bg-overlay-1" onClick={() => track('demo')}>Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}


