import { getAllPosts, getPostBySlug } from '@/lib/blog/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
        <p className="text-sm text-text-muted">{post.category} • {post.author} • {post.readTime}</p>
      </header>
      <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-xl">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </div>
      <section className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
    </article>
  );
}


