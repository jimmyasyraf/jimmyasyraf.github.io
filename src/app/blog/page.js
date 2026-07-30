import Link from "next/link";
import { format } from 'date-fns';
import { getSortedPostsData } from '@/lib/posts.js';

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <main className="max-w-2xl mx-auto px-6 pt-14">
      <p className="text-xs text-neutral-400">$ ls -lt ~/blog</p>
      <h1 className="mt-3 mb-12 text-2xl text-black font-medium tracking-tight">blog</h1>

      <div>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-t border-neutral-200 py-5"
          >
            <span className="text-xs text-neutral-400 tabular-nums shrink-0 sm:w-24">
              {format(new Date(post.date), "yyyy-MM-dd")}
            </span>
            <span className="relative flex-1 text-sm text-neutral-700 group-hover:text-black transition-colors">
              <span aria-hidden="true" className="absolute -left-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              {post.title}
            </span>
            <span className="text-xs text-neutral-300 shrink-0">
              {post.category.toLowerCase()}
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}
