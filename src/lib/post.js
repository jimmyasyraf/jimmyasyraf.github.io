import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getPost(slug) {
  const fileName = postsDirectory + `/${slug}.md`;
  const content = fs.readFileSync(fileName, 'utf-8');

  const matterResult = matter(content);
  return matterResult;
}
