import Link from "next/link";
import { format } from 'date-fns';
import { Card, CardHeader } from '@/components/ui/card';
import { getSortedPostsData } from '@/lib/posts.js';

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <div className="flex flex-col gap-4">
      {
        posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="flex-row gap-6 items-center">
              <div className="w-32 sm:w-36 h-24 sm:h-28 overflow-hidden items-center justify-center flex">
                <Link href={`/blog/${post.id}`}>
                  <img className="object-cover" src={post.thumbnail}/>
                </Link>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <p className="text-sm font-medium text-neutral-500">
                  {post.category.toUpperCase()}
                </p>
                <Link href={`/blog/${post.id}`}>

                  <h2 className={`text-lg sm:text-xl font-semibold`} >{post.title}</h2>
                </Link>
                <p className="text-sm font-medium text-neutral-500">{format(new Date(post.date), "MMMM d, yyyy")}</p>
              </div>

            </CardHeader>
          </Card>
        ))
      }
      </div>
    </div>
  )
}
