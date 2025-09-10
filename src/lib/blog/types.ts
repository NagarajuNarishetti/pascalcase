export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  coverImage: string;
  contentHtml?: string;
  publishedAt?: string;
};

export type BlogCardProps = Pick<
  BlogPost,
  'slug' | 'title' | 'excerpt' | 'category' | 'author' | 'readTime' | 'coverImage'
>;


