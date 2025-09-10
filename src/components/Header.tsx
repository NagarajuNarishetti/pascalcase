import Link from 'next/link';

export default function Header() {
  return (
    <header role="banner" className="w-full border-b border-white/10">
      <nav aria-label="Main" className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold">Pascalcase</Link>
        <ul className="flex gap-6 text-sm text-text-muted">
          <li><Link href="/products">Our Products</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}


