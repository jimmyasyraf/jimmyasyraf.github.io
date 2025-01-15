import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { format } from 'date-fns';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { getSortedPostsData } from '@/lib/posts.js';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

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
                <div>
                <Badge variant="secondary">{post.category}</Badge>
                </div>
                <Link href={`/blog/${post.id}`}>

                  <h2 className={`text-lg sm:text-xl font-semibold`} >{post.title}</h2>
                </Link>
                <p className="text-base text-sm text-gray-700">{format(new Date(post.date), "MMMM d, yyyy")}</p>
              </div>

            </CardHeader>
          </Card>
        ))
      }
      </div>
    </div>
  )
}
