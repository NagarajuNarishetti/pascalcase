import fs from 'node:fs/promises';
import path from 'node:path';
import type { BlogPost } from './types';

const dataFile = path.join(process.cwd(), 'data', 'blogs.json');

export async function getAllPosts(): Promise<BlogPost[]> {
  const raw = await fs.readFile(dataFile, 'utf-8');
  const posts = JSON.parse(raw) as BlogPost[];
  return posts.sort((a, b) => (a.publishedAt && b.publishedAt ? b.publishedAt.localeCompare(a.publishedAt) : 0));
}

export async function getLatestPosts(count: number): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}


