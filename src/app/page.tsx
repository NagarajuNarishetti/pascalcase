import Link from 'next/link';
import Hero from '@/components/Hero';
import BlogSlider from '@/components/BlogSlider';
import ContactSection from '@/components/ContactSection';
import OurCustomers from '@/components/OurCustomers';
import { getLatestPosts } from '@/lib/blog/api';

export const revalidate = 60; // ISR: revalidate every 60s

export default async function Home() {
  const posts = await getLatestPosts(3);
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Why Pascalcase section removed as requested */}
      <section id="blog" className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
        <BlogSlider posts={posts} />
        <div className="mt-6 flex justify-end">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15">
            More Blogs →
          </Link>
        </div>
      </section>
      <OurCustomers />
      <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
        <ContactSection />
      </section>
    </div>
  );
}
