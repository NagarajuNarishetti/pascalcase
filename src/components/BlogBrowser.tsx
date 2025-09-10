"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import BlogSlider from './BlogSlider';
import type { BlogCardProps } from '@/lib/blog/types';

type BlogBrowserProps = {
  posts: BlogCardProps[];
};

const TAGS_ORDER = [
  'Dynamics 365',
  'Power Automate',
  'Power Apps',
  'Power Pages',
  'Dataverse',
  'Power BI',
  'Copilot Studio',
  'Azure',
  'Copilot',
];

export default function BlogBrowser({ posts }: BlogBrowserProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>(posts.map((p) => p.category).filter(Boolean) as string[]);
    // Order by TAGS_ORDER first, then any remaining alphabetically
    const orderedKnown = TAGS_ORDER.filter((t) => set.has(t));
    const remaining = Array.from(set).filter((t) => !TAGS_ORDER.includes(t)).sort((a, b) => a.localeCompare(b));
    return [...orderedKnown, ...remaining];
  }, [posts]);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of posts) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return counts;
  }, [posts]);

  const visibleTags = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tags;
    return tags.filter((t) => t.toLowerCase().includes(q));
  }, [tags, query]);

  const filtered = useMemo(() => {
    if (activeTags.length === 0) return posts;
    return posts.filter((p) => activeTags.includes(p.category));
  }, [posts, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearAll = () => setActiveTags([]);

  const selectAllVisible = () => setActiveTags((prev) => Array.from(new Set<string>([...prev, ...visibleTags])));

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!isOpen) return;
      const tgt = e.target as Node;
      if (popoverRef.current && !popoverRef.current.contains(tgt)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [isOpen]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {/* Searchable popover */}
        <div className="relative" ref={popoverRef}>
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-md border border-border-default bg-surface-input px-3 py-1.5 text-sm hover:bg-overlay-1 text-text-primary"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
          >
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
            </svg>
            <span className="text-sm">Filter by</span>
          </button>

          {isOpen && (
            <div className="absolute z-20 mt-2 w-80 rounded-xl border border-white/20 bg-surface-800/95 backdrop-blur p-3 shadow-xl" role="dialog" aria-label="Filter by topics">
              <div className="relative">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="search topics"
                  className="w-full rounded-md border border-border-default bg-surface-input px-8 py-2 text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 ring-accent text-text-primary"
                />
                <svg className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="mt-3 max-h-64 overflow-auto pr-1">
                <div className="grid grid-cols-1 gap-1">
                  {visibleTags.map((t) => {
                    const selected = activeTags.includes(t);
                    const count = tagCounts.get(t) ?? 0;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTag(t)}
                        aria-pressed={selected}
                        className={`flex items-center justify-between rounded-md px-2 py-1 text-sm transition-colors ${
                          selected ? 'bg-accent/20 text-text-primary' : 'hover:bg-overlay-1 text-text-primary'
                        }`}
                      >
                        <span className="truncate">{t}</span>
                        <span className={`ml-3 rounded-full border px-1.5 py-0.5 text-[10px] ${selected ? 'border-accent/60' : 'border-border-subtle text-text-muted'}`}>{count}</span>
                      </button>
                    );
                  })}
                  {visibleTags.length === 0 && (
                    <div className="px-2 py-2 text-sm text-text-muted">No matches</div>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button type="button" onClick={clearAll} className="rounded-md border border-border-default px-2 py-1 text-xs hover:bg-overlay-1">Clear</button>
                  <button type="button" onClick={selectAllVisible} className="rounded-md border border-border-default px-2 py-1 text-xs hover:bg-overlay-1">Select all</button>
                </div>
                <button type="button" onClick={() => setIsOpen(false)} className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-[color:var(--on-accent)] hover:brightness-95">Done</button>
              </div>
            </div>
          )}
        </div>

        {/* Active tag chips */}
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => {
            const selected = activeTags.includes(t);
            return (
              <button
                key={t}
                type="button"
                onClick={() => toggleTag(t)}
                aria-pressed={selected}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  selected
                    ? 'border-accent/60 bg-accent/20 text-text-primary'
                    : 'border-border-subtle bg-surface-input text-text-muted hover:bg-overlay-1'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Clear */}
        {activeTags.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto rounded-md border border-border-default px-3 py-1.5 text-xs hover:bg-overlay-1"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">Showing {filtered.length} of {posts.length} articles</p>
        {activeTags.length > 0 && (
          <div className="text-xs text-text-muted">Active: {activeTags.join(', ')}</div>
        )}
      </div>

      <BlogSlider posts={filtered} />
    </div>
  );
}

