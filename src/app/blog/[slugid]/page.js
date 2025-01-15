import Markdown from 'markdown-to-jsx';
import { Badge } from "@/components/ui/badge";
import { getSortedPostsData } from '@/lib/posts';
import { getPost } from '@/lib/post';
import { format } from 'date-fns';

export const generateStaticParams = async () => {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slugid: post.id }));
}

export default function BlogPost(props) {
  const slug = props.params.slugid;
  const post = getPost(slug);

  return (
    <div className="max-w-2xl mx-auto py-4 px-4">
      <Badge variant="secondary">{post.data.category}</Badge>
      <p className='text-sm font-normal text-zinc-700 mt-4 mb-4'>{format(new Date(post.data.date), "MMMM d, yyyy")}</p>
      <h1 className='text-3xl font-semibold'>{post.data.title}</h1>
      <div className='prose'>
      <Markdown>
        {post.content}
      </Markdown>
      </div>
    </div>
  )
}
