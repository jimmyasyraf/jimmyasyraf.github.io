import Link from "next/link";
import { format } from 'date-fns';
import { getSortedPostsData } from '@/lib/posts.js';

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <main className="max-w-2xl mx-auto px-6 pt-14">
      <h1 className="anim-rise mb-12 text-2xl text-black dark:text-white font-semibold tracking-tight">Blog</h1>

      <div className="anim-rise anim-delay-1">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 border-t border-neutral-200 dark:border-neutral-900 py-5"
          >
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600 tabular-nums shrink-0 sm:w-24">
              {format(new Date(post.date), "yyyy-MM-dd")}
            </span>
            <span className="relative flex-1 text-[15px] font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
              <span aria-hidden="true" className="absolute -left-4 text-neutral-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              {post.title}
            </span>
            <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700 shrink-0">
              {post.category.toLowerCase()}
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}
