"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import type { BlogCardProps } from '@/lib/blog/types';

type BlogSliderProps = {
  posts: BlogCardProps[];
};

export default function BlogSlider({ posts }: BlogSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [viewMode, setViewMode] = useState<'flash' | 'grid'>('flash');
  const [slideWidth, setSlideWidth] = useState(0);

  const GAP_PX = 16; // gap-4

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerView(3);
      else if (w >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // Measure width of a single slide to compute exact translateX in px
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const firstSlide = container.querySelector('[data-slide="1"]') as HTMLElement | null;
      if (firstSlide) {
        setSlideWidth(firstSlide.getBoundingClientRect().width);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [itemsPerView, viewMode, posts.length]);

  const maxIndex = Math.max(0, posts.length - itemsPerView);
  const canPrev = index > 0;
  const canNext = index < maxIndex;


  const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Swipe support
  const swipeHandlers = {
    drag: 'x' as const,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.2,
    onDragEnd: (_: unknown, info: { offset: { x: number } }) => {
      const threshold = 60;
      if (info.offset.x < -threshold) goNext();
      if (info.offset.x > threshold) goPrev();
    },
  };

  return (
    <section aria-label="Blog posts" className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Latest from the blog</h2>
        {/* Segmented control: Grid / Flashcard */}
        <div className="relative inline-flex items-center rounded-full border border-border-default bg-surface-input p-1 backdrop-blur" role="tablist" aria-label="View mode">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className="absolute top-1 bottom-1 rounded-full bg-overlay-2"
            style={{ left: viewMode === 'grid' ? '4px' : '50%', right: viewMode === 'grid' ? '50%' : '4px' }}
            aria-hidden
          />
          <button
            role="tab"
            aria-selected={viewMode === 'grid'}
            onClick={() => setViewMode('grid')}
            className={`relative z-[1] inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors ${viewMode === 'grid' ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
            </svg>
          </button>
          <button
            role="tab"
            aria-selected={viewMode === 'flash'}
            onClick={() => setViewMode('flash')}
            className={`relative z-[1] inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors ${viewMode === 'flash' ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M8 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} {...p} />
          ))}
        </div>
      ) : (
        <div className="relative px-10 sm:px-16">
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              {...swipeHandlers}
              className="flex"
              style={{ ['--g' as string]: `${GAP_PX}px`, gap: `${GAP_PX}px` }}
              animate={{ x: -index * (slideWidth + GAP_PX) }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            >
              {posts.map((p, i) => (
                <div
                  key={p.slug}
                  data-slide={i + 1}
                  style={{ flex: `0 0 calc((100% - (var(--g) * ${itemsPerView - 1})) / ${itemsPerView})` }}
                >
                  <BlogCard {...p} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Side arrows */}
          <div className="pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button
                aria-label="Previous"
                onClick={goPrev}
                disabled={!canPrev}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-default bg-surface-input text-text-primary shadow-md backdrop-blur hover:bg-overlay-1 focus:outline-none focus-visible:ring-2 ring-accent disabled:opacity-40"
              >
                <span className="text-2xl font-extrabold leading-none">&lt;</span>
              </button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button
                aria-label="Next"
                onClick={goNext}
                disabled={!canNext}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-default bg-surface-input text-text-primary shadow-md backdrop-blur hover:bg-overlay-1 focus:outline-none focus-visible:ring-2 ring-accent disabled:opacity-40"
              >
                <span className="text-2xl font-extrabold leading-none">&gt;</span>
              </button>
            </div>
          </div>

          {/* Dots with max three visible */}
          {(() => {
            const totalPages = maxIndex + 1;
            const dotsCount = Math.min(3, totalPages);
            const start = Math.min(Math.max(index - 1, 0), Math.max(0, totalPages - dotsCount));
            const indices = Array.from({ length: dotsCount }, (_, i) => start + i);
            return (
              <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Slide indicators">
                {indices.map((i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full border ${i === index ? 'bg-text-primary/80 border-border-strong' : 'bg-text-primary/20 border-border-default'}`}
                  />
                ))}
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}


