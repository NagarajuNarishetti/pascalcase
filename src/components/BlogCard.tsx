import Image from 'next/image';
import Link from 'next/link';
import type { BlogCardProps } from '@/lib/blog/types';

export default function BlogCard({ slug, title, excerpt, category, author, readTime, coverImage }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg h-full">
      <Link href={`/blog/${slug}`} className="block focus:outline-none focus-visible:ring-2 ring-accent ring-offset-2 ring-offset-surface-800">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image src={coverImage} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/70 text-white px-3 py-1 text-xs border border-white/20">
            {category}
          </span>
        </div>
        <div className="p-4 space-y-2 flex flex-col h-full">
          <header>
            <h3 className="text-lg font-semibold leading-snug line-clamp-2 group-hover:underline underline-offset-4">
              {title}
            </h3>
          </header>
          <p className="text-sm text-text-muted line-clamp-3 flex-1">{excerpt}</p>
          <footer className="mt-3 flex items-center justify-between text-xs text-text-muted">
            <span>{author}</span>
            <span>{readTime}</span>
          </footer>
        </div>
      </Link>
    </article>
  );
}


