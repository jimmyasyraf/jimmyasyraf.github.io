import Markdown from 'markdown-to-jsx';
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
    <main className="max-w-2xl mx-auto px-6 pt-14">
      <p className="font-mono text-xs text-neutral-400">
        {format(new Date(post.data.date), "yyyy-MM-dd")} · {post.data.category.toLowerCase()}
      </p>
      <h1 className="mt-3 text-2xl sm:text-3xl text-black font-semibold tracking-tight">{post.data.title}</h1>
      <div className="prose prose-sm mt-10">
        <Markdown>
          {post.content}
        </Markdown>
      </div>
    </main>
  )
}
