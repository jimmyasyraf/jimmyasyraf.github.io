import Link from "next/link";
import { format } from 'date-fns';
import { Card, CardHeader } from '@/components/ui/card';
import { getSortedPostsData } from '@/lib/posts.js';
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <div className="flex flex-col gap-4">
      {
        posts.map((post) => (
          <ScrollReveal key={post.id}>
            <Card className="overflow-hidden w-full">
              <CardHeader className="p-0 flex-col sm:flex-row overflow-hidden">
                <Link href={`/blog/${post.id}`}>
                  <img className="object-cover aspect-[4/3] w-full sm:w-56" src={post.thumbnail}/>
                </Link>
                <div className="flex flex-1 flex-col gap-2 p-6 m-0">
                  <p className="text-sm font-medium text-neutral-500">
                    {post.category.toUpperCase()}
                  </p>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className={`text-lg font-semibold`} >{post.title}</h2>
                  </Link>
                  <p className="text-sm font-medium text-neutral-500">{format(new Date(post.date), "MMMM d, yyyy")}</p>
                </div>

              </CardHeader>
            </Card>
          </ScrollReveal>
        ))
      }
      </div>
    </div>
  )
}
